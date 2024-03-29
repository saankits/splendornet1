import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SignUp = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state.userdata.users)
    const nameRegex = /[a-zA-Z]+/
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const mobileregex = /[0-9]+/
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g


  return (
    <div className='SignUp'>
        <h2>Create your Account</h2>
      <form>
        <label>First Name</label><input type="text" placeholder="firstname" name="fname" value={props.newuser.fname} onChange={props.handlenewuser}/>
        {nameRegex.test(props.newuser.fname) ? "" : <span>first name is not valid</span>}
        <label>Last Name</label><input type="text" placeholder="lastname" name="lname" value={props.newuser.lname} onChange={props.handlenewuser}/>
        {nameRegex.test(props.newuser.lname) ? "" : <span>last name is not valid</span>}
        <label>Email</label><input type="email" placeholder="email" name="email" value={props.newuser.email} onChange={props.handlenewuser}/>
        {
            emailregex.test(props.newuser.email) ? "" : props.newuser.email.length>0 ? <span>email is not valid</span> :<span>enter your email</span>
        }
        <label>MobileNumber</label><input type="number" placeholder="mobile number"  name="mobile" value={props.newuser.mobile} onChange={props.handlenewuser}/>
        {
            mobileregex.test(props.newuser.mobile) ? props.newuser.mobile.length>10 ? <span>invalid number</span>:"" : props.newuser.mobile.length > 0 ? <span>entervalid mobileno.</span> : <span>enter mobile number</span>
        }
        <label>Password</label><input type="password" placeholder="password" name="password" value={props.newuser.password} onChange={props.handlenewuser}/>
        {passwordregex.test(props.newuser.password) ? "" : <span>password is invalid</span>}
        <label>Confirm Password</label><input type="password" placeholder="confirm password" name="confirmpassword" onChange={props.handleconfirmPassword}/>
        {
            props.newuser.password == props.confirmpassword ? "" : <span>passwords do nat match</span>
        }
        <button onClick={props.handleCreateuser}>Create Account</button>
      </form>
    </div>
  )
}

export default SignUp
