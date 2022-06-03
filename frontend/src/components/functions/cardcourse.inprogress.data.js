import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardcourseIP from "../Card/cardcourse.inprogress";

export const CardCourseIPData = () =>
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
        rows.push(<Row key={element.id_class}><CardcourseIP data={element}/></Row>);
    });
    return <Container>{rows}</Container>;
}
