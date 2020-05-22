import React from "react"
import "./Menu.css"

interface MenuProps {
  handleMouseDown: any;
  menuVisibility: boolean;
}

function Menu(props: MenuProps) {
  let visibility = "hide";

  if (props.menuVisibility) {
    visibility = "show";
  }

  return (
    <div
      id="flyoutMenu"
      onMouseDown={props.handleMouseDown}
      className={visibility}>
      <h2><a href="#">Menu item 1</a></h2>
      <h2><a href="#">Menu item 2</a></h2>
      <h2><a href="#">Menu item 3</a></h2>
    </div>
  );
}

export default Menu;