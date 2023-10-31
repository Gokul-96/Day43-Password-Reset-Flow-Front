import React, { useState } from 'react'
import { Link,useRoutes } from 'react-router-dom'
import { API } from '../global'

//Home component
function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  //handlelogin coding
  const handlelogin = async () => {
    const payload = {
      username: email,
      password
    }
    const res = await fetch(`${API}/users/login`, {
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
    <div className='container mb-3'>
      <div className='container'>
        <ul class="nav justify-content-center mt-2">
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/signup">Signup</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/forget-password">Forgetpassword</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} className="nav-link active" aria-current="page" to="/">Logout</Link>
          </li>
        </ul>
      </div>
      <h2 className='container'>Login</h2>
  
        <label for="email" class="form-label">Email Address</label>
        <input type="email"
          className="form-control"
          id="email"
          placeholder="Enter your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <label for="password" class="col-form-label">Password</label>
        <input type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3" onClick={handlelogin}>Login</button>
        {error ? <p>{error}</p> :""}
        {message ?<p>{message}</p> : ""}
    </div>
  )
}

export default Home