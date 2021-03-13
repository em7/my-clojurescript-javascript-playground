const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, "index.preload.js")
      }
    })
  
    win.loadFile('index.html')
    win.webContents.openDevTools()
  }
  
  app.whenReady().then(createWindow)
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  ipcMain.on('on-button-click', (evt, ...args) => {
    console.log("MAIN: Received 'on-button-click'.")
    evt.reply('on-main-callback')
  })