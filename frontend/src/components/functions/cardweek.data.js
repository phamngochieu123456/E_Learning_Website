import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardcourse from "../Card/cardcourse.component";

export const CardWeekData = () =>
{
    const [weeks,setWeeks] = useState([])
    const class1 = localStorage.getItem("class");
    const classjson1 = JSON.parse(class1)
    useEffect(()=>{
        const config = {
            method: 'get',
            url: 'http://localhost:5000/class/getallclass',
            withCredentials: true,
            data: {id_class: classjson1.id_class}

        }
        axios(config).then((res)=>{
          setWeeks(res.data.data)
        })
    },[])

    var cols = [];
    var rows = [];
    weeks.forEach(element => {
        cols.push(<Col><Cardcourse data={element}/></Col>);
    });
    for (var i = 0; i < cols.length; i++)
    {
        rows.push(<Row md={3}>{cols[i]}{cols[++i]}{cols[++i]}</Row>)
        rows.map((cols)=>{
            <Row key={i}>{cols}</Row>
        })
    }
    return <Container>{rows}</Container>;

}
