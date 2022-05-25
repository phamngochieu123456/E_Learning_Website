const btn_login = document.getElementById("btn-login")
const btn_login_google = document.getElementById("btn-login-google")

btn_login.addEventListener("click",(e)=>{
  e.preventDefault()
  login()
})

async function login()
{
  try
  {
    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value
    const payload = {email: email, password: password}
    var res = await axios.post("login",payload)
    if(res.data.success)
    {
      authjwt()
    }
    else
    {
      console.log(res.data.data)
    }
  }
  catch(err)
  {
    console.log("error: " + err)
  }
        
}

async function authjwt()
{  
  try
  {
    var atstr = document.cookie
    var jsonStr = '{"' + atstr.replace(/ /g, '", "').replace(/=/g, '": "') + '"}'
    jsonStr = jsonStr.replace(";","")
    var atjson = JSON.parse(jsonStr)
    const config = {
      method: 'post',
      url: '/auth/jwt',
      headers: { 'Authorization': "Bearer " + atjson.accesstoken }
    }
    const res = await axios(config)
    if(res.data.success)
    {
      window.location.href = "home"
    }
    else
    {
      console.log("json0: " + JSON.stringify(data.data))
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

async function authjwtagain()
{  
  try
  {
    var atstr = document.cookie
    var jsonStr = '{"' + atstr.replace(/ /g, '", "').replace(/=/g, '": "') + '"}'
    jsonStr = jsonStr.replace(";","")
    var atjson = JSON.parse(jsonStr)
    const res = await axios.post("/auth/jwt/getnewtoken",{oldaccesstoken: atjson.accesstoken})
    if(res.data.success)
    {
      const config = {
        method: 'post',
        url: '/auth/jwt',
        headers: { 'Authorization': "Bearer " + res.data.data }
      }
      const res1 = await axios(config)
      
      if(res1.data.success)
      {
        window.location.href = "home"
      }
      else
      {
        console.log("json1: " + JSON.stringify(res1.data.data))
      }
    }
    else
    {
      console.log("json2: " + JSON.stringify(data.data))
    }
  } 
  catch(err)
  {
    console.log("Error2: " + err)
  } 
}

btn_login_google.addEventListener("click",(e)=>{
  e.preventDefault()
  console.log("btn-google")
  window.location.href = "login/google"
})