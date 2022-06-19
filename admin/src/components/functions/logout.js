import axios from "axios";
import { NavDropdown } from "react-bootstrap";

export const Logout = () =>{
    const handleClick = async () =>
    {
        try
        {
            const config = {
                method: "get",
                url: "http://localhost:5000/user/logout",
                withCredentials: true,
                headers: {authorization: ' JWT fefege...' ,'Content-Type': 'application/json'}
            }
            await axios(config)
            localStorage.removeItem("account")
            localStorage.removeItem("user")
            localStorage.removeItem("islogin")
            localStorage.removeItem("accesstoken")
            localStorage.removeItem("refreshtoken")
            window.location.href = "http://localhost:8000/"
        }
        catch(err)
        {
            console.log("Error: " + err)
        }
    }
    return(
        <NavDropdown.Item onClick={handleClick}>Logout</NavDropdown.Item>

    )
} 