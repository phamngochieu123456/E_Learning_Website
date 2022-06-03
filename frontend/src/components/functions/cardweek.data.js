import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export const GetWeekByIdClass = () =>
{
    const { id_class } = useParams();
    const [weeks,setWeeks] = useState([])

    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://localhost:5000/class/getWeekByIdClass',
            withCredentials: true,
            data: {id_class: id_class}
        }
        axios(config).then((res)=>{
            setWeeks(res.data.data)
        })
    },[])
    console.log(weeks)
    // var rows = [];
    // classes.forEach(element => {
    //     rows.push(<Row key={element.id_class}><CardcourseIP data={element}/></Row>);
    // });
    // return <Container>{rows}</Container>;
}
