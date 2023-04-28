import React from "react";
import Menu from"../images/menu.jpg";


const Header =({click})=> {
    return ( <div>
      <div className="header">
        <img src={Menu} alt="menu" onClick={click}/>
        <span>
            Team React
        </span>
      </div>
        </div>
    ); 
};
export default Header;