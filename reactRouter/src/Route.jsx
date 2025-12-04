import React from "react";  
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

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