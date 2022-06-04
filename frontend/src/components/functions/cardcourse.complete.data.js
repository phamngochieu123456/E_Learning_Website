import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardcourseC from "../Card/card.complete";

export const CardCourseCData = () =>
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

    var rows = [];
    classes.forEach(element => {
        rows.push(<Row key={element.id_class}><CardcourseC data={element}/></Row>);
    });
    return <Container>{rows}</Container>;
}
