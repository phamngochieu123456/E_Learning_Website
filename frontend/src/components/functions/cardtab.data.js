import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab } from 'react-bootstrap';
import LearnLecture from '../Card/learn.lecture'
export const GetTabByIdTopic = (props) =>
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
        rows.push(<Tab.Pane key={element.id_sub_topic} eventKey={element.id_sub_topic}><LearnLecture id_sub_topic={element.id_sub_topic}/></Tab.Pane>)
    });
    return <>{rows}</>;
}
