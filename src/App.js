import React, { useState } from "react"
import Header from "./components/header";
import Sidebar from "./components/sidebar";
//testing

const App =()=> {
    const[open,setopen]=useState(false);
    const handleClick=()=>{
        setopen(!open);
    };
    return ( <div>

       
       <Header click={handleClick} />
       
       <Sidebar open={open} />
        </div>
    ); 
};
export default App;