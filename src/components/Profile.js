import React from 'react'

const Profile = (props) => {
  return (
    <div className='loginuser'>
        <h2>details</h2>
      {
        props.currentuser && 
        <div className='profile'>
            <label>First Name</label> <input type="text" value={props.currentuser.fname} />
            <label>Last Name</label><input type="text" value={props.currentuser.lname} />
            <label>Email</label><input type="email" value={props.currentuser.email} />
            <label>Mobile number</label><input type="number" value={props.currentuser.mobile} />
            <button onClick={()=>alert("data updated")} >Update</button>
        </div>
      }
    </div>
  )
}

export default Profile
