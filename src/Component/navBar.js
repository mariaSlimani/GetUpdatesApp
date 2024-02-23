import { useEffect, useState } from "react";
import "./stylesheet/navBar.css";
import { MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      {/*<ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <MDBIcon fas icon="circle-xmark" />
            <span>Home</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <MDBIcon fas icon="circle-xmark" />
            <span>Explore Websites</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <MDBIcon fas icon="circle-xmark" />
            <span>Add a new Website</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <MDBIcon fas icon="circle-xmark" />
            <span>Settings</span>
          </a>
        </li>
  </ul>*/}
      <ul class="menu">
        <li
          onClick={() => {
            navigate("/");
          }}
          title="Home Page"
          className={window.location.pathname === "/" ? "currentPageNav" : ""}
        >
          <b>Home</b>
        </li>
        <li
          onClick={() => {
            navigate("/websitePage");
          }}
          title="Explore Your Websites"
          className={
            window.location.pathname === "/websitePage" ? "currentPageNav" : ""
          }
        >
          <b>Explore</b>
        </li>
        <li
          onClick={() => {
            navigate("/addWebsite");
          }}
          title="Add a new WebPage"
          className={
            window.location.pathname === "/addWebsite" ? "currentPageNav" : ""
          }
        >
          <b>Add</b>
        </li>
        <li
          onClick={() => {
            navigate("/settings");
          }}
          title="Access Your Settings"
          className={
            window.location.pathname === "/settings" ? "currentPageNav" : ""
          }
        >
          <b>Settings</b>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
