import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export const GetCourseDetailByIdClass = () =>
{
    const { id_class } = useParams();
    const user = localStorage.getItem("user");
    const accountjson = JSON.parse(user)
    const id_user = accountjson.id_user
    const [details,setDetails] = useState([])

    useEffect(()=>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/isExistUserWithClass',
            withCredentials: true,
            data: {id_user: id_user, id_class: id_class}
        }
        axios(config).then((res)=>{
            setDetails(res.data.success)
        })
    },[])
    console.log(details)
    // var rows = [];
    // weeks.forEach(element => {
    //     rows.push(<Nav.Link key={element.id_week} href={window.location.href+'/week/'+element.id_week}>{element.name_week}</Nav.Link>);
    // });
    // return <>{rows}</>;
}
