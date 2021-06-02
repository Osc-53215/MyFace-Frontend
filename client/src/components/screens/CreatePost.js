import React, {useState} from 'react'

const CreatePost = ()=>{
    const [title, setTitle] = useState ("")
    const [body, setBody] = useState ("")
    const [image, setImage] = useState ("")
    return (
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >
            <input 
            type="text" 
            placeholder="title" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="body" 
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            />
            <div className="file-field input-field">
            <div className="btn #00796b teal darken-2">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>console.log(e.target.files)}/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            
            </div>
            <button className="btn waves-effect waves-light #00796b teal darken-2">
                    Post
                </button>
            
        </div>
    )

}

export default CreatePost