import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardcourseIP from "../Card/cardcourse.inprogress";

export const CardCourseIPData = () =>
{
    const [classes,setClasses] = useState([])

    useEffect(()=>{
        const user = localStorage.getItem("user");
        const userjson = JSON.parse(user)

        const payload = {
            id_user:userjson.id_user
        }
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/getClassByIdUser',
            withCredentials: true,
            data: payload,
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
