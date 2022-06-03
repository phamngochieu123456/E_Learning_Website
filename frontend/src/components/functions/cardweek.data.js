import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export const GetWeekByIdClass = () =>
{
    const { id_class } = useParams();
    const [weeks,setWeeks] = useState([])

    useEffect(()=>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/getWeekByIdClass',
            withCredentials: true,
            data: {id_class: id_class}
        }
        axios(config).then((res)=>{
            setWeeks(res.data.data)
        })
    },[])
    var rows = [];
    weeks.forEach(element => {
        rows.push(<Nav.Link key={element.id_week} href={window.location.href+'/week/'+element.id_week}>{element.name_week}</Nav.Link>);
    });
    return <>{rows}</>;
}
