import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
export const GetSubTopicByIdTopic = (props) =>
{
    const [subtopics,setSubtopics] = useState([])
    useEffect(()=>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/getSubTopicByIdTopic',
            withCredentials: true,
            data: {id_topic: props.id_topic}
        }
        axios(config).then((res)=>{
            setSubtopics(res.data.data)
        })
    },[])
    var rows = [];
    subtopics.forEach(element => {
        rows.push(<Nav.Item key={element.id_sub_topic}><Nav.Link eventKey={element.id_sub_topic}>{element.name_sub_topic}</Nav.Link></Nav.Item>);
    });
    return <>{rows}</>;
}
