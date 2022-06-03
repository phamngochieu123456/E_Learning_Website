import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardTab from "../Card/card.tab";
import CardcourseT from "../Card/card.topic";

export const CardTopicData = () =>
{
    const { id_week } = useParams();
    const [topics,setTopics] = useState([])

    useEffect(()=>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/getTopicByIdWeek',
            withCredentials: true,
            data: {id_week: id_week}
        }
        axios(config).then((res)=>{
            setTopics(res.data.data)
        })
    },[])
    var rows = [];
    var rows1 = [];
    topics.forEach(element => {
        rows.push(<Nav variant="pills" className="flex-column bg-light" key={element.id_topic}><CardcourseT data={element}/></Nav>);
        rows1.push(<CardTab key={element.id_topic} data={element}/>);
    });

    return(
        <>
        <Col sm={3}>{rows}</Col>
        <Col sm={9}>{rows1}</Col>
        </>
    )
}
