import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardcourse from "../Card/cardcourse.component";

const getAllClass = async ()=>
{
    try
    {
        const config = {
            method: 'get',
            url: 'http://localhost:5000/class/getallclass',
            withCredentials: true
        }
        const res = await axios(config)

        if(res.data.success)
        {
            console.log("class: " + JSON.stringify(res.data.data))
            // const classes = res.data.data
            // for(var i = 0; i < classes.length; i++)
            // {
            //     Data[i] = Object.assign({},classes[i])
            // }
            // console.log("Data1: " + JSON.stringify(Data))
        }
        else
        {
          console.log("Error: " + res.data.data)
        }

        
    }
    catch(err)
    {
        console.log("Error: " + err)
    }
}

export const CardCourseData = () =>
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
        },[])
    })

    // console.log("set classes: " + classes)

    var cols = [];
    var rows = [];
    for (var i = 0; i < 9; i++) {
        cols.push(<Col><Cardcourse/></Col>);
    }
    for (var i = 0; i < cols.length; i++)
    {
        rows.push(<Row>{cols[i]}{cols[++i]}{cols[++i]}</Row>)
        rows.map((cols)=>{
            <Row key={i}>{cols}</Row>
        })
    }
    return <Container>{rows}</Container>;

}
