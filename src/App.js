
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { Routes,Route, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';
import { Offline, Online } from 'react-detect-offline';
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './redux/userSlice';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const data = useSelector(state=>state.userdata.users)
  useEffect(()=>{
    if(localStorage.getItem("loginspl")){
      navigate("/home")
    }
  },[])
  const [loginCred,setLoginCred] = useState({
    email:"",
    password:""
  })
  const [newuser, setNewuser] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    password:""

  })
  const [currentuser,setActiveuser] = useState({})
   const [users,setUsers] = useState([])
  const [confirmpassword,setConfirmpassword] = useState("")
  const handlecredentials = (e) =>{
    setLoginCred({...loginCred,[e.target.name]:e.target.value})
    console.log(loginCred)
  }
  const handlenewuser = (e) => {
    setNewuser({...newuser,[e.target.name]:e.target.value})
    console.log(newuser)
  }
  const handleconfirmPassword = (e) =>{
    setConfirmpassword(e.target.value)
    console.log(confirmpassword)
  }
  const handleLogin = (e)=> {
    e.preventDefault();
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
    if(emailregex.test(loginCred.email) && passwordregex.test(loginCred.password)){
      let index = users.findIndex(x=>x.email === loginCred.email)
      if(index>-1){
        // if(users[index].password == loginCred.password){
        if(data[index].password == loginCred.password){
          alert("loged in ")
          localStorage.setItem("loginspl",loginCred.email)
          setActiveuser({...data[index]})
          navigate("/home")
          console.log(currentuser)
        }else{
          alert("either email is incorrect or password is incorrect")
        }
      }else{
        alert("user doesnot exists")
        }

    }
    
  }
  const handleCreateuser = (e) => {
    e.preventDefault();
    const nameRegex = /[a-zA-Z]+/
    const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const mobileregex = /[0-9]+/
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
    if(nameRegex.test(newuser.fname) && nameRegex.test(newuser.lname) && emailregex.test(newuser.email) && mobileregex.test(newuser.mobile) && passwordregex.test(newuser.password) && newuser.password === confirmpassword ){
      alert("newuser created");
      // console.log(users)
      let ind = users.findIndex(x=>x.email === users.email)
      if(ind<0){
        setUsers([...users,newuser])
      navigate("/")
      dispatch(addUser([...data,newuser]))
      }
      else{
        alert("user already exists")
      }
    }
    else{
      alert("check your input fields again")
    }
    
  
  }
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Login handlecredentials={handlecredentials} loginCred={loginCred} handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp handlenewuser={handlenewuser} newuser={newuser} handleconfirmPassword={handleconfirmPassword} confirmpassword={confirmpassword} handleCreateuser={handleCreateuser} />} />
        <Route path="/home" element={<Home currentuser={currentuser} />} />
        <Route path="/logedinuser" element={<Profile currentuser={currentuser}/>} />
      </Routes>

<div className="modal">
      <Online>connection succesfull</Online>
      <Offline>Connection terminated
      </Offline>
      </div>
      
    </div>
    // {console.log(data)}
  );
}

export default App;
