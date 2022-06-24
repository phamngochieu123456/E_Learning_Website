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
            localStorage.clear()
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