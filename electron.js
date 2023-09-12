const isDev = process.env.NODE_ENV !== 'production';
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const pythonScriptPath = path.join(__dirname, 'python-scripts/probando.py');

app.on('ready', () => {
    console.log("Electron is ready!");
    createWindow();
});

function createWindow() {
    console.log("Creating window...")
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'python-scripts/preload.js')
        }
    });

    // Load React app
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

ipcMain.on('capture-face', (event, arg) => {
    console.log("Received 'capture-face' message from renderer")
    // Run the Python script here
    const python = spawn('python', [pythonScriptPath]);

    python.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    python.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    python.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});
