import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const navigate= useNavigate()
  return (
    <div>
      <div className="nav">
            <div onClick={()=>navigate("/logedinuser")}><span>{props.currentuser.fname}</span>
            <img src="https://www.shutterstock.com/shutterstock/photos/1146069941/display_1500/stock-vector-welcome-poster-with-spectrum-brush-strokes-on-white-background-colorful-gradient-brush-design-1146069941.jpg" alt="welcome " /></div>
      </div>
      <div className="body">
        <img src="https://www.shutterstock.com/shutterstock/photos/1146069941/display_1500/stock-vector-welcome-poster-with-spectrum-brush-strokes-on-white-background-colorful-gradient-brush-design-1146069941.jpg" alt="welcome " />
      </div>
    </div>
  )
}

export default Home
