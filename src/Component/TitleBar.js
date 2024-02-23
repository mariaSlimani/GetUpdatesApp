// src/components/TitleBar.js
import React from "react";
import "./stylesheet/TitleBar.css";
import logo from "../assets/logo-tea.png";
import { minimizeWindow, maximizeWindow, closeWindow } from "../Utils/electronBridge";
import { MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="title-bar-draggable-area">
        <img src={logo} className="app_logo" alt="logo" />
        Stay Updated!
      </div>
      <div className="title-bar-buttons">
        <div className="title-bar-button close" title="Close" onClick={closeWindow}>
          <MDBIcon fas icon="circle-xmark" />
        </div>
        <div className="title-bar-button maximize" title="Maximise" onClick={maximizeWindow}>
          <MDBIcon fas icon="circle-stop" />
        </div>
        <div className="title-bar-button minimize" title="Minimise" onClick={minimizeWindow}>
          <MDBIcon fas icon="circle-minus" />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
