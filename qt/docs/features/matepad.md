# MatePad edition

The Android build loads Simplified Chinese settings from `qt/translations/xournal_qt_zh_CN.ts`. The catalogue also
covers descriptions, shortcut names, the labels of built-in paper and sticker collections, and the settings dialogs.
The Android build uses the host Qt's `lrelease` to compile the catalogue into the app. The `SettingsData` context
contains names read from the built-in resources at runtime.

The Android top toolbar is 48 logical pixels high. The tablet tab strip removes its extra vertical padding and
keeps the touch target size and the system bar inset. The tools still scroll horizontally when they do not fit.
Presentation mode, its settings and shortcuts, and the plugin menus and loader are disabled in Android.

On compatible Huawei devices, set the pen's double-tap action in **System settings → Accessibility features → Stylus**.
The app supports the system's current-tool/eraser and current-tool/previous-tool choices. Switching restores the
previous preset when it still exists. The app handles the event while the writing view is active.

## On the device

- [ ] Open settings in portrait and landscape. Read the Chinese labels and long hints, switch between every tab,
      and scroll to the bottom of the longer sections. Confirm the top controls remain tappable with system bars visible.
- [ ] On a MatePad with an M-Pencil, double-tap the pen body to switch to the eraser, then double-tap again to restore
      the same pen preset. Change the system action to previous tool and check it with two different pen presets.
- [ ] Double-tap with settings open and with the app in the background. The active tool should stay the same.
