import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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