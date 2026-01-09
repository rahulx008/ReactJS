import React from "react";  
import {Footer, Header} from "./Components/index";

import { BrowserRouter, Outlet } from "react-router-dom";
// Layout component to include Header and Footer on all pages
// and render the matched child route in between

function Route(){
    return (
        <>
        
            <Header />

            <Outlet />
            {/* Render the matched child route here */}

            <Footer />
        
            
        </>
        

    );
}

export default Route;