const { default: NavbarLogged } = require("./navbarlogged");

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
    }
    return(
        <>
        <RenderMenu />
        </>
    )
}
