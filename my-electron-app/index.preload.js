const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        processVersionsNode: process.versions.node,
        processVersionsChrome: process.versions.chrome,
        processVersionsElectron: process.versions.electron,
        buttonClicked: function() {
            ipcRenderer.send("on-button-click")
        },
        registerMainCallback: function(func) {
            ipcRenderer.on("on-main-callback", (event, ...args) => func(...args))
        }
    }
)