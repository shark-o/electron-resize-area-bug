const { app, BrowserWindow } = require('electron');

let main;

app.on('ready', () => {
    main = new BrowserWindow({
        show: true,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: false
        }
    });

    main.loadURL('https://www.google.com/');

    main.webContents.on('did-finish-load', () => {
        main.webContents.insertCSS("body { cursor: crosshair; overflow: hidden; }");
    })
});