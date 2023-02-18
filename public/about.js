/* SPDX-License-Identifier: Apache-2.0 */
const { app, BrowserWindow } = require("electron");
const path = require("path");

class AboutWindow extends BrowserWindow {
  constructor(parentWindow) {
    // Create a new BrowserWindow with a fixed size and no menu bar
    super({
      parent: parentWindow,
      modal: true,
      width: 400,
      height: 200,
      resizable: false,
      maximizable: false,
      minimizable: false,
      fullscreenable: false,
    });

    // Load an HTML file containing the About information
    const aboutURL = app.isPackaged
      ? `file://${path.join(__dirname, "../build/about.html")}`
      : "http://localhost:3000/about.html";
    this.loadURL(aboutURL);

    // Remove the menu bar from the About popup window
    if (app.isPackaged) {
      this.setMenu(null);
    }
  }
}

module.exports = AboutWindow;
