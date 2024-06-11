import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {

  const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        
       const response =  await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password}),
          });
          const json = await response.json();
          console.log(json);

          if(json.success){
            //redirect
            localStorage.setItem('token',json.authToken);
            navigate('/');
            props.showAlert("Account created successfully","success");

          }
          else{
            props.showAlert("Invalid details","danger");
          }

    }

    const onchange = (e)=>{
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }


  return (
    <>
    <h1>Create an accout to use iNotebook</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder="Enter name" onChange={onchange}/>
    <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onchange} minLength={5} required/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' placeholder="Password" onChange={onchange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default Signup
