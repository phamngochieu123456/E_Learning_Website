import axios from "axios";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Logout = () =>{
    const navigate = useNavigate();
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
            window.location.href = "http://localhost:3000/login"
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