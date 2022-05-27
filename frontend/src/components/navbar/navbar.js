const { useState, useEffect } = require("react");
const { default: NavbarLogged } = require("./navbarlogged");
const { default: NavbarUnlogged } = require("./navbarUnlogged");

export const Navbar = () =>{
    const account = localStorage.getItem("account")
    const RenderMenu = () =>{
        if (account){
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