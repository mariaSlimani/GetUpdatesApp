import { useEffect, useState } from "react";
import "./stylesheet/card.css";

function Card(props) {
    
  return <div id={props.cardId} className={"card "+props.cardType}>
    {props.children}
  </div>;
}

export default Card;
