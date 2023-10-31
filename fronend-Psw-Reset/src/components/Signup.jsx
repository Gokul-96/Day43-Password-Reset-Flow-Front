import   React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import { API } from '../global'

//signup component
function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  //handlesignup coding
  const handlesignup = async () => {
    const payload = {
      username: email,
      password
    }
    const res = await fetch(`${API}/users/signup`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await res.json();
  
    if (data.error) {
      setError(data.error)
    }
    if(data.message){
      setMessage(data.message)
    }
  }
  return (
    <div className='container'>
    <div className='top'>
     <h1 className='container'>Signup</h1>
     <Link style={{ color: "black" }} className='nav' aria-current="page" to="/">Login</Link>
     </div>
        <label for="email" class="form-label">Email Address</label>
        <input type="email" 
        className="form-control" 
        id="email" 
        placeholder="Enter your Email Id" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password" class="col-form-label">Password</label>
        <input type="password" 
        className="form-control" 
        id="password" 
        placeholder="Enter your password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3" onClick={handlesignup}>Submit</button>
      {error ? <p>{error}</p> :""}
      {message ? <p>{message}</p> : ""}
    </div>
  )
}

export default Signup