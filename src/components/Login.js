import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g

    

  return (
    <div className='SignUp mt50'>
        <h2>Login</h2>
      <form>
        <label>Email: </label><input type="email" name="email" value={props.loginCred.email} placeholder='enter your email' onChange={props.handlecredentials} />
        {
            emailregex.test(props.loginCred.email) ? "" : <span>enter valid Email</span>
        }
        <label>Password:</label><input type="password" name="password" value={props.loginCred.password} placeholder="enter your password" onChange={props.handlecredentials} />
        {
            passwordregex.test(props.loginCred.password) ? "" : <span>Enter valid password</span>
        }
        <button onClick={props.handleLogin}>Login</button>
        <div>
        <span>do not have Account ?</span><Link to="/signup"><button>Register</button></Link>
        </div>
      </form>
    </div>
  )
}

export default Login
