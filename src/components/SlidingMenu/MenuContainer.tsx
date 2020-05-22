import React, { MouseEvent, useState } from "react";
import MenuButton from "./MenuButton"
import Menu from "./Menu"

function MenuContainer() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const handleMouseDown = (e: MouseEvent) => {
    toggleMenu();
    
    console.log("clicked toggle button");
    e.stopPropagation();
  }

  return (
    <div id="container">
      <MenuButton handleMouseDown={handleMouseDown}/>
      <Menu
        handleMouseDown={handleMouseDown}
        menuVisibility={visible}/>

      <div>
        <p>Test title</p>
        <ul>
            <li>Content 1</li>
            <li>Content 2</li>
            <li>Content 3</li>
            <li>Content 4</li>
            <li>Content 5</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuContainer;