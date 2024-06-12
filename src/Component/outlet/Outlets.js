import React from "react";
import Header from "../Header/Headers";
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';

function Outlets(){
    return(
       <>
        <Header/>
        <Outlet />
        <Footer/>
       </>
    )
}
export default Outlets;