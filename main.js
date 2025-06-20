// main.js
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // permite usar Node.js no renderer
      contextIsolation: false // necessário para o nodeIntegration funcionar
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
