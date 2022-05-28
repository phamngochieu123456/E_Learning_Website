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
            navigate("/login")
            window.location.reload();
        }
        catch(err)
        {
            console.log("Error: " + err)
        }
    }
    // const handleClick = async () =>
    // {
    //     try
    //     {
    //     const payload = this.state;
    //     const headers = {
    //         authorization: ' JWT fefege...' ,
    //         'Content-Type': 'application/json'
    //     }
    //     const res = await axios.put("http://localhost:5000/user/logout",payload,{headers})

    //     localStorage.setItem("state",false)
    //     localStorage.removeItem("username")
    //     navigate("/login")
    //     window.location.reload(); //like here

    //     }
    //     catch(err)
    //     {
    //     console.log("Error: " + err)
    //     }    

    // }
    return(
        <NavDropdown.Item href="/login" onClick={handleClick}>Logout</NavDropdown.Item>

    )
} 