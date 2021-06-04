import React, {useState, useEffect} from 'react'
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
    const likePost = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
                  console.log(result)
          const newData = data.map(item=>{
              if(item._id==result._id){
                  return result
              }else{
                  return item
              }
          })
          setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }
  const unlikePost = (id)=>{
    fetch('/unlike',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId:id
        })
    }).then(res=>res.json())
    .then(result=>{
      //   console.log(result)
      const newData = data.map(item=>{
          if(item._id==result._id){
              return result
          }else{
              return item
          }
      })
      setData(newData)
    }).catch(err=>{
      console.log(err)
  })
}
const makeComment = (text, postId)=>{
    fetch('/comment',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId,
            text
        })
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        const newData = data.map(item=>{
            if(item._id == result._id){
                return result
            }else{
                return item
            }
        })
        setData(newData)
    }).catch(err=>{
        console.log(err)
    })
}
    return(
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
                        {
                        item.comments.map(record=>{
                            return(
                                <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span>{record.text}</h6>
                            )
                        })
                    }
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        makeComment(e.target[0].value, item._id)
                    }}>
                        <input type="text" placeholder="add comment"/>
                    </form>
                    </div>
                </div>
                    )
                })
            }
            </div>
            //</div>
            // </div>
    )
}
<<<<<<< HEAD
export default Home





=======
export default Home
>>>>>>> 764287b5b52ad78552a73c2ccf0f9e2c8d17e2b5
