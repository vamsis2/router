import React from "react";

const Sidebar =({open})=> {
    return  <div>
     <div className={open?"sidebar collapse":"sidebar"}>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>USER</li>
            <li>PRODUCT</li>
            <li>PRODUCT LIST</li>
            <li>COUSTOMER</li>
            <li>COUSTOMER LIST</li>
            <li>ADD USERS</li>
        </ul>
     </div>
      </div>

};
export default Sidebar;