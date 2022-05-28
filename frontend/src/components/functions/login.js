import axios from "axios"

export async function authjwt()
{  
  try
  {
    const accesstoken = localStorage.getItem("accesstoken")
    const config = {
      method: 'post',
      url: 'http://localhost:5000/auth/jwt',
      withCredentials: true,
      headers: { 'Authorization': "Bearer " + accesstoken}
    }
    const res = await axios(config)
    if(res.data.success)
    {
        window.location.href = "http://localhost:3000/dashboard"
    }
    else
    {
      console.log("json0: " + JSON.stringify(res.data.data))
    }
  } 
  catch(err)
  {
    console.log("Error1: " + err)
    if(!err.response)
    {
      console.log("Khong co error.response: " + err)
    }
    else
    {
      if(err.response.status===401)
      {
        authjwtagain()
      }
    }
  } 
}

export async function authjwtagain()
{  
  try
  {
    const refreshtoken = localStorage.getItem("refreshtoken")
    const res = await axios.post("/auth/jwt/getnewtoken",{refreshtoken: refreshtoken})
    if(res.data.success)
    {
      const config = {
        method: 'post',
        url: 'http://localhost:5000/auth/jwt',
        withCredentials: true,
        headers: { 'Authorization': "Bearer " + res.data.data}
      }
      const res1 = await axios(config)
      
      if(res1.data.success)
      {
        localStorage.setItem("refreshtoken",res1.data.data)
        window.location.href = "http://localhost:3000/dashboard"
      }
      else
      {
        console.log("json1: " + JSON.stringify(res1.data.data))
      }
    }
    else
    {
      console.log("json2: " + JSON.stringify(res.data.data))
    }
  } 
  catch(err)
  {
    console.log("Error2: " + err)
  } 
}