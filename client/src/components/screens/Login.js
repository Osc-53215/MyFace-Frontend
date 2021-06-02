import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Login = ()=>{const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         M.toast({html: "invalid e-mail", classes:"#d50000 red accent-4"})
         return
        }
        fetch('/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes:"#d50000 red accent-4"})
            }
            else{
                M.toast({html:"signed in successfully", classes: "#66bb6a green lighten-1"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })

    }
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>My Face</h2>
                <input 
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #00796b teal darken-2">
                    Login
                </button>
                <h5>
                    <Link to="/signup">Create an account?</Link>
                </h5>
          
        </div>
      </div>
    )
}

export default Login