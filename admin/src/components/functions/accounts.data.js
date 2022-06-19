import axios from "axios";
import { useEffect, useState } from "react";
import Courses from "../Card/courses";

export const AccountData = () =>
{
    const [classes,setClasses] = useState([])

    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://localhost:5000/class/getallclass',
            withCredentials: true
        }
        axios(config).then((res)=>{
            setClasses(res.data.data)
        })
    },[])
    if (classes.length!=0)
    {
        return <Courses data={classes} ></Courses>;
    }

}
