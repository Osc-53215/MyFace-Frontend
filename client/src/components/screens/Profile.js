import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';

const Profile = ()=>{
    const [mypics, setPics] = useState([])
    // eslint-disable-next-line
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })

    },[])


    return(
        <div style={{maxWidth:"80%",margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
        }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius: "80px"}} 
                    src= "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"/>
                </div>
                    <div>
                    <div>
                        

                                
                    <h4>{state?state.name: "loading"}</h4>
                    <h5>{state?state.email:"loading"}</h5>
                        <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                            <h6>{mypics.length} posts</h6>
                            <h6> 1000 followers</h6>
                        </div>
                    </div>
                        <div>
                        </div>
                </div>
            </div>
        <div></div>
            <div className="row">
             <div className = 'col s2'>
            </div>
    
         <div className = 'col s10'>
            <div className="display posts">
                
            <div className="gallery">
                {
                    mypics.map(item=>{
                        return(
                            <img key={item._id} className="item" src= {item.photo} alt={item.title} /> 
                        )
                    })
                }
                </div>
                </div>
            </div>
        </div>
     </div>   
    )
}

export default Profile