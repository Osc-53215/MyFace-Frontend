import React from 'react'
import Sidebar from '../Sidebar'

const Home = ()=>{
    return(
        <div className="row">
            <div className = 'col s2'>
            <Sidebar/>
            </div>
        <div className = 'col s10'>
            <div className="card home-card">
                <h5>John Smith</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1612973455574-1ce8b8482104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                </div>
                    <div className="card-content">
                    <i className="material-icons">thumb_up</i>
                    <i className="material-icons">thumb_down</i>
                        <h6>title</h6>
                        <p>this is an amazing post</p>
                        <input type="text" placeholder="add comment"/>

                    </div>
                </div>
                <div className="home">
            <div className="card home-card">
                <h5>John Smith</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1612973455574-1ce8b8482104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                </div>
                    <div className="card-content">
                    <i className="material-icons">thumb_up</i>
                    <i className="material-icons">thumb_down</i>
                        <h6>title</h6>
                        <p>this is an amazing post</p>
                        <input type="text" placeholder="add comment"/>

                    </div>
                </div>
            </div>

            <div className="home">
            <div className="card home-card">
                <h5>John Smith</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1612973455574-1ce8b8482104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                </div>
                    <div className="card-content">
                    <i className="material-icons">thumb_up</i>
                    <i className="material-icons">thumb_down</i>
                        <h6>title</h6>
                        <p>this is an amazing post</p>
                        <input type="text" placeholder="add comment"/>

                    </div>
                </div>
            </div>

            <div className="home">
            <div className="card home-card">
                <h5>John Smith</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1612973455574-1ce8b8482104?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
                </div>
                    <div className="card-content">
                    <i className="material-icons">thumb_up</i>
                    <i className="material-icons">thumb_down</i>
                        <h6>title</h6>
                        <p>this is an amazing post</p>
                        <input type="text" placeholder="add comment"/>

                    </div>
                </div>
            </div>
        </div>

            </div>
    )
}

export default Home