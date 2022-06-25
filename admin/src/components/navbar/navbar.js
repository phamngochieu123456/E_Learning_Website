import NavbarLoggedTeacher from "./navbarlogged.teacher";

const { default: NavbarLogged } = require("./navbarlogged");

export const Navbar = () =>{
    const account = localStorage.getItem("account")
    const typeuser = localStorage.getItem("type_user");
    const typeuserjson = JSON.parse(typeuser)
    const RenderMenu = () =>{
        if (account)
        {
            if (typeuserjson.name_type_user=="ADMIN"){
                return(
                    <>
                    <NavbarLogged/>
                    </>
                )
            }
            else{
                return(
                    <>
                        <NavbarLoggedTeacher />
                    </>
                )
            }
        }
    }
    return(
        <>
        <RenderMenu />
        </>
    )
}
