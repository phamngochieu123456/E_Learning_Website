const { useState, useEffect } = require("react");
const { default: NavbarLogged } = require("./navbarlogged");
const { default: NavbarUnlogged } = require("./navbarUnlogged");

export const Navbar = () =>{
    const name_account = localStorage.getItem("name_account")
    const RenderMenu = () =>{
        
        if (name_account){
            return(
                <>
                <NavbarLogged/>
                </>
            )
        }
        else{
            return(
                <>
                <NavbarUnlogged />
                </>
            )
        }
    }
    return(
        <>
        <RenderMenu />
        </>
    )
}
