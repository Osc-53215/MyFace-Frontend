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
            
            setData(result.posts)
        })
    },[])
    return(
        <div className="row">
            <div className = 'col s2'>
            <Sidebar/>
            </div>
        <div className = 'col s10'>
            <div className="home">{
                data.map(item=>{
                    return(
                        <div className="card home-card">
                <h5>{item.postedBy.name}</h5>
                <div className="card-image">
                    <img src={item.photo} />
                </div>
                    <div className="card-content">
                    <i className="material-icons">thumb_up</i>
                    <i className="material-icons">thumb_down</i>
                        <h6>{item.title}</h6>
                        <p>{item.body}</p>
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