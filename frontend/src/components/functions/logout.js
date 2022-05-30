import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

<<<<<<< Updated upstream
export const Logout = () =>{
    const navigate = useNavigate();
    const handleClick = () =>
    {
        localStorage.setItem("state",false)
        localStorage.removeItem("name_account")
        localStorage.removeItem("id_account")
        localStorage.removeItem("account")
        navigate("/login")
        window.location.reload(); //like here

=======
const HandleClick = async () =>
{
    try
    {
        const config = {
            method: "get",
            url: "http://localhost:5000/user/logout",
            headers: {authorization: ' JWT fefege...' ,'Content-Type': 'application/json'}
        }
        await axios(config)
        localStorage.removeItem("account")
        localStorage.removeItem("user")
        localStorage.removeItem("islogin")
        localStorage.removeItem("accesstoken")
        localStorage.removeItem("refreshtoken")
        window.location.href = "http://localhost:3000/login"
>>>>>>> Stashed changes
    }
    catch(err)
    {
        console.log("Error: " + err)
    }
}

export const Logout = () =>{
    return(
        <NavDropdown.Item onClick={HandleClick}>Logout</NavDropdown.Item>

    )
} 