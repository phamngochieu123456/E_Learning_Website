const { default: NavbarLogged } = require("./navbarlogged");
const { default: NavbarUnlogged } = require("./navbarUnlogged");

export const Navbar = () =>{
<<<<<<< Updated upstream
    const name_account = localStorage.getItem("name_account")
=======
    const account = localStorage.getItem("account")

>>>>>>> Stashed changes
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
