import { useEffect, useState } from "react";
import "./stylesheet/loadingScreen.css";
import LoadingImg from "../assets/logo-tea.png";

function LoadingScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setLoading(false);
    }, 3);
  }, [props.loading]);
  return <div id="loadingScreen">
  <img src={LoadingImg}/>
    <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </section>
  </div>;
}

export default LoadingScreen;
