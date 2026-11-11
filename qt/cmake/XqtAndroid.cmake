# The Android package: an APK built by androiddeployqt from the xournal-qt target (see qt/docs/development/android.md).
#   cmake --preset android-arm64-debug && cmake --build build-android --target apk

qt_policy(SET QTP0002 NEW)  # Android paths in target properties may be generator expressions
set(XQT_ANDROID_DIR "${CMAKE_CURRENT_LIST_DIR}/../packaging/android")

target_sources(xournal-qt PRIVATE
    ${CMAKE_CURRENT_LIST_DIR}/../src/app/AndroidSetup.h
    ${CMAKE_CURRENT_LIST_DIR}/../src/app/AndroidSetup.cpp
    ${CMAKE_CURRENT_LIST_DIR}/../src/app/AndroidActivity.h
    ${CMAKE_CURRENT_LIST_DIR}/../src/app/AndroidActivity.cpp)

# The resources the core reads as files (page templates, palettes, icons, the emoji font, the handwriting models of
# hwr-models/: ONNX Runtime opens a model by its path; the built-in stickers of stickers/) travel as Qt resources and are copied to the app's data folder at
# start (AndroidSetup.cpp).
file(GLOB_RECURSE _xqt_share_files LIST_DIRECTORIES false RELATIVE "${XQT_BUILD_RESOURCE_DIR}" "${XQT_BUILD_RESOURCE_DIR}/*")
set(_xqt_share_abs)
foreach(f ${_xqt_share_files})
    list(APPEND _xqt_share_abs "${XQT_BUILD_RESOURCE_DIR}/${f}")
endforeach()
# (BIG_RESOURCES: the emoji font is 10 MB, which as a C++ array would take the compiler gigabytes)
qt_add_resources(xournal-qt xqt_android_share PREFIX /xqt-share BASE "${XQT_BUILD_RESOURCE_DIR}" BIG_RESOURCES
    FILES ${_xqt_share_abs})

# A symbol font for the UI (Android's UI font has no ✓ ✕ ↵ ...; see resources/fonts/README.md)
qt_add_resources(xournal-qt xqt_android_fonts PREFIX /xqt-fonts BASE "${CMAKE_CURRENT_LIST_DIR}/../resources/fonts"
    FILES "${CMAKE_CURRENT_LIST_DIR}/../resources/fonts/XqtSymbols.ttf")

# Compile the tablet settings translations with the host's Qt tools, then embed them in the APK.
find_program(XQT_LRELEASE NAMES lrelease-qt6 lrelease6 lrelease
    HINTS "${QT_HOST_PATH}/bin" "${QT_HOST_PATH}/libexec"
    NO_CMAKE_FIND_ROOT_PATH REQUIRED)
set(_xqt_settings_ts "${CMAKE_CURRENT_LIST_DIR}/../translations/xournal_qt_zh_CN.ts")
set(_xqt_settings_qm "${CMAKE_CURRENT_BINARY_DIR}/xournal_qt_zh_CN.qm")
add_custom_command(OUTPUT "${_xqt_settings_qm}"
    COMMAND "${XQT_LRELEASE}" -nounfinished "${_xqt_settings_ts}" -qm "${_xqt_settings_qm}"
    DEPENDS "${_xqt_settings_ts}" VERBATIM)
set_source_files_properties("${_xqt_settings_qm}" PROPERTIES QT_RESOURCE_ALIAS xournal_qt_zh_CN.qm)
qt_add_resources(xournal-qt xqt_settings_translations PREFIX /i18n FILES "${_xqt_settings_qm}")

# Package id, name, versions. The version code grows with the version (0.1.0 -> 100).
math(EXPR _xqt_version_code "${PROJECT_VERSION_MAJOR} * 10000 + ${PROJECT_VERSION_MINOR} * 100 + ${PROJECT_VERSION_PATCH}")
set_target_properties(xournal-qt PROPERTIES
    QT_ANDROID_PACKAGE_SOURCE_DIR "${XQT_ANDROID_DIR}"
    QT_ANDROID_PACKAGE_NAME "org.xournalqt.writing"
    QT_ANDROID_APP_NAME "Xournal Qt Writing"
    QT_ANDROID_APP_ICON "@mipmap/ic_launcher"
    QT_ANDROID_VERSION_NAME "${PROJECT_VERSION}"
    QT_ANDROID_VERSION_CODE "${_xqt_version_code}"
    QT_ANDROID_MIN_SDK_VERSION 28      # Qt 6.11's minimum (Android 9)
    QT_ANDROID_TARGET_SDK_VERSION 36   # Android 16
    QT_ANDROID_COMPILE_SDK_VERSION 36
    # QML imports: scan the app's QML only (not the spikes and tests under qt/).
    QT_QML_ROOT_PATH "${CMAKE_CURRENT_LIST_DIR}/../src/app/qml")


# Audio recordings (qt/docs/features/audio.md, "Android"): Qt Multimedia's audio devices (AAudio, OpenSL ES) are in its
# library and its Java part; its media plugins (FFmpeg, the Android media backend: players, cameras, video) are not
# used, and the FFmpeg one would bring FFmpeg's libraries into the APK. For shared plugins on Android qt_import_plugins
# decides what androiddeployqt packs.
if(TARGET Qt6::Multimedia)
    qt_import_plugins(xournal-qt EXCLUDE_BY_TYPE multimedia)
endif()
