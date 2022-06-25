import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
export const GetCourseDetailByIdClass = () =>
{
    const { id_class } = useParams();
    const user = localStorage.getItem("user");
    let id_user = ""
    let id_type_user = ""
    if(user!=null)
    {
        const accountjson = JSON.parse(user)
        id_user = accountjson.id_user
        id_type_user = accountjson.id_type_user
    }

    const [details,setDetails] = useState([])

    const handleClick = async () =>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/payment/pay',
            withCredentials: true,
            data: {id_class: id_class,id_user: id_user, id_type_user: id_type_user}
        }
        const res = await axios(config)
        if(res.data.success)
        {
            window.location.href = res.data.data
        }
        else
        {
            console.log(JSON.stringify(res))
        }
    }
    useEffect(()=>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/isExistUserWithClass',
            withCredentials: true,
            data: {id_user: id_user, id_class: id_class}
        }
        axios(config).then((res)=>{
            setDetails(res.data.success)
        })
    },[])
    if(!details)
    {
        return(
            <Col>
            <br />
            <Card>
            <Card.Body>
                <Card.Title>Get started today</Card.Title>
                    <Card.Text>
                    You have already enrolled in this course.
                    </Card.Text>
                    <Link  className="bg-dark btn" to={'/learn/'+id_class} style={{color:'white', width:'100%'}}>
                        Go to Course
                    </Link>
            </Card.Body>
            </Card>
            <br />
            </Col> 
        )
    }
    else{
        return(
            <Col>
            <br />
            <Card>
            <Card.Body>
                <Card.Title>Get started today</Card.Title>
                    <Card.Text>
                    Enroll in a course or request more information about the program.
                    </Card.Text>
                    <button className="bg-dark" style={{color:'white', width:'100%'}} onClick={handleClick}>
                        Enroll Now
                    </button>
                    <hr></hr>
                    <button className="bg-white" style={{color:'black', width:'100%'}}>
                        Request Info
                    </button>
            </Card.Body>
            </Card>
            <br />
            </Col> 
        )
    }
}
