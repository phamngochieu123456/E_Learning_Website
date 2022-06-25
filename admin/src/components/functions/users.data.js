import axios from "axios";
import { useEffect, useState } from "react";
import Users from "../Card/users";

export const UserData = () =>
{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://localhost:5000/user/getAllUsers',
            withCredentials: true
        }
        axios(config).then((res)=>{
            setUsers(res.data.data)
        })
    },[])
    if (users.length!=0)
    {
        return <Users data={users} ></Users>;
    }

}
