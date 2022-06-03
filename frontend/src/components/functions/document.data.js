import axios from 'axios';
import React, { useEffect, useState } from 'react';
export const GetDocumentBySubTopicId = (props) =>
{
    const [document,setDocument] = useState([])
    useEffect(()=>{
        const config = {
            method: 'post',
            url: 'http://localhost:5000/class/getDocumentBySubTopicId',
            withCredentials: true,
            data: {id_sub_topic: props.id_sub_topic}
        }
        axios(config).then((res)=>{
            setDocument(res.data.data)
        })
    },[])
    if (document.type_document=='.pdf')
    {
        return(
            <>
                <embed height={"650px"} width={"100%"} type="application/pdf" src={"http://localhost:5000/pdf/read/"+document.id_document}></embed>
            </>
        )
    }
    else if(document.type_document=='.mp4'){
        return(
            <>
                <video crossOrigin="use-credentials" controls><source src={"http://localhost:5000/video/watch/"+document.id_document}></source></video>
            </>
        )
    }
}
