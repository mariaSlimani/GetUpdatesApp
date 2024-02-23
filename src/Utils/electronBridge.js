const { ipcRenderer } = window.require("electron");

export const minimizeWindow = () => {
  ipcRenderer.send("minimize-window");
};

export const maximizeWindow = () => {
  ipcRenderer.send("maximize-window");
};

export const closeWindow = () => {
  ipcRenderer.send("close-window");
};
