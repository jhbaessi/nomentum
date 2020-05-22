import React from "react";
import "./MenuButton.css";

interface MenuButtonProps {
  handleMouseDown: any;
}

function MenuButton(props: MenuButtonProps) {
  return(
    <button
      id="roundButton"
      onMouseDown={props.handleMouseDown}></button>
  );
}

export default MenuButton;