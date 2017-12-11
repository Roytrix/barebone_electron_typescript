import { app, BrowserWindow, BrowserView } from "electron";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    //Create the browser window.
    mainWindow = new BrowserWindow({
        darkTheme: true,
        height: 600,
        width: 800
    });

    // load the main html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "../index.html"),
        protocol: "file",
        slashes: true
    }));

    //TODO add environnement handling for dev and prod
    mainWindow.webContents.openDevTools();

}

// This is called when Electron has finished initialized
// Some APIs can only be used after this event occurs
app.on("ready", createWindow);

//Quit when all windows are closed
app.on("window-all-closed", () => {
    //On darwin it is common for application and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    //On darwin it's common to re-create a window in the app when 
    // dock icons is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// require file here to enhance this app

