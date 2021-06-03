import React, {useState, useEffect} from 'react'
import Sidebar from '../Sidebar'

const Home = ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/allpost', {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result =>{
            console.log(result)
            setData(result.posts)
        })
    },[])

    const likePost = (id) =>{
        fetch('/like', {
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postID:id
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }

    const unlikePost = (id) =>{
        fetch('/unlike', {
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postID:id
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }

    return(
        <div className="row">
            <div className = 'col s2'>
            <Sidebar/>
            </div>
        <div className = 'col s10'>
            <div className="home">{
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                <h5>{item.postedBy.name}</h5>
                <div className="card-image">
                    <img src={item.photo} />
                </div>
                    <div className="card-content">
                    <i className="material-icons" 
                    onClick={()=>{likePost(item._id)}}
                    >thumb_up</i>
                    <h6>{item.likes.length} likes</h6>
                    <i className="material-icons"
                    onClick={()=>{unlikePost(item._id)}}
                    >thumb_down</i>
                        <h6>{item.dislikes.length} dislikes</h6>
                        <h5>{item.title}</h5>
                        <h4>{item.body}</h4>
                        <input type="text" placeholder="add comment"/>
                    </div>
                </div>
                    )
                })
            }

            </div>
            </div>
             </div>
    )
}

export default Home