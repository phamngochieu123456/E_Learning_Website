import axios from "axios";
import { useEffect, useState } from "react";
import Accounts from "../Card/accounts";

export const AccountData = () =>
{
    const [accounts,setAccounts] = useState([])

    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://localhost:5000/user/getAllAccounts',
            withCredentials: true
        }
        axios(config).then((res)=>{
            setAccounts(res.data.data)
        })
    },[])
    if (accounts.length!=0)
    {
        return <Accounts data={accounts} ></Accounts>;
    }

}
