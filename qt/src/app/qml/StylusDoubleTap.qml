import QtQml

QtObject {
    id: stylus
    property bool enabled: false
    property var current: null
    property var previous: null
    property var beforeEraser: null

    function rememberTool() {
        const id = app.toolbox.active
        const entry = id !== "" && app.entryInHand(app.toolbox.entry(id)) ? id : ""
        const name = app.tool
        if (current && current.name === name && current.entry === entry)
            return
        previous = current
        current = { name: name, entry: entry }
        if (name !== "eraser")
            beforeEraser = current
    }

    function restoreTool(tool) {
        if (!tool) {
            app.takeToolOfType("pen")
        } else if (tool.entry === "" || !app.applyToolEntry(tool.entry)) {
            app.selectTool(tool.name)
        }
    }

    function switchTool(mode) {
        if (!enabled)
            return
        rememberTool()
        if (mode === 0) {
            if (current.name === "eraser")
                restoreTool(beforeEraser)
            else
                app.takeToolOfType("eraser")
        } else if (mode === 1 && previous) {
            restoreTool(previous)
        }
        rememberTool()
    }

    property Connections toolSignals: Connections {
        target: app
        // applyToolEntry changes the tool and its preset together.
        function onToolChanged() { Qt.callLater(stylus.rememberTool) }
        function onStylusDoubleTapped(mode) { stylus.switchTool(mode) }
    }
    property Connections presetSignals: Connections {
        target: app.toolbox
        function onActiveChanged() { Qt.callLater(stylus.rememberTool) }
    }
    Component.onCompleted: rememberTool()
}
