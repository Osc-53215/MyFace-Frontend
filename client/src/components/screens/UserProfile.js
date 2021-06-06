import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { UserContext } from '../../App';
const Profile = ()=>{
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    console.log(userid)
    
    useEffect(()=>{

        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setProfile(result)
        })

    },[])


    return( 
        <>
        {userProfile ? 
            <div style={{maxWidth:"550px",margin:"0px auto"}}>
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
                        <h5>{userProfile.user.name}</h5>
                        <h5>{userProfile.user.email}</h5>
                            <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                                <h6>{userProfile.posts.length} posts</h6>
                                <h6>40 friends</h6>
                                <h6>40 followings</h6>
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
                        userProfile.posts.map(item=>{
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
        
        : <h2>loading...!</h2>}

     </>   
    )
}

export default Profile