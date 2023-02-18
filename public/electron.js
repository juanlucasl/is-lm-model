/* SPDX-License-Identifier: Apache-2.0 */
// Electron's main script. By placing this file in the public directory, it will be copied into
// the build directory automatically, and be easily accessed by the Electron application
// without needing to be bundled with the code. This can make it easier to update the Electron
// code without needing to rebuild the React code.
const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");
const AboutWindow = require("./about");

let mainWindow;
let aboutWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "./icon.png"),
    minHeight: 576,
    minWidth: 768,
    height: 620,
    width: 800,
    maxHeight: 720,
    maxWidth: 1280,
  });

  // Make it so that links are opened using the user's desktop web browser.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  // In production, set the initial browser path to the local bundle generated by the Create
  // React App build process.
  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged
    ? `file://${path.join(__dirname, "../build/index.html")}`
    : "http://localhost:3000";
  mainWindow.loadURL(appURL);

  mainWindow.on("closed", () => (mainWindow = null));

  // Create a menu from a menu template.
  const mainMenu = Menu.buildFromTemplate(createMenuTemplate());

  // Use mainMenu in the application.
  Menu.setApplicationMenu(mainMenu);
}

function createMenuTemplate() {
  const menuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "Quit",
          accelerator: "CmdOrCtrl+Q",
          click() {
            app.quit();
          },
        },
      ],
    },
    {
      label: "About",
      click() {
        createAboutWindow();
      },
    },
  ];

  if (process.platform === "darwin") {
    // On Mac, the first label on the menu is "assimilated" into the app main
    // dropdown in the omnibar.
    // Add an empty menu label on Mac so that the File dropdown doesn't get
    // merged with the Electron menu.
    menuTemplate.unshift({});
  }

  if (!app.isPackaged) {
    menuTemplate.push({
      label: "Developer options",
      submenu: [
        {
          label: "Toggle developer tools",
          accelerator: "F12",
          click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
          },
        },
        { role: "reload" },
      ],
    });
  }

  return menuTemplate;
}

function createAboutWindow() {
  aboutWindow = new AboutWindow(mainWindow);

  // Make it so that links are opened using the user's desktop web browser.
  aboutWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  aboutWindow.on("closed", () => (aboutWindow = null));
}

app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS (There applications usually stay active
// until the user quits them explicitly).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Make sure that a window is always available when the application is activated.
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});