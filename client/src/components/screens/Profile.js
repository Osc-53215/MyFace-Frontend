import React, {useEffect, useState} from 'react'

const Profile = ()=>{
    const [mypics, setPics] = useState([])
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
        <div style={{margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"10% auto",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"140px", height:"140px"}} 
                    src= "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"/>
                </div>
                    <div>
                    <div>
                        

                                
                    <h4>John Smith</h4>
                        <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                            <h6>40 posts</h6>
                            <h6>40 friends</h6>
                            <h6>40 followings</h6>
                           
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