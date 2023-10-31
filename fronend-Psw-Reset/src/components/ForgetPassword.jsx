import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import { API } from '../global'

//forgetpassword component
function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const[randomString,setRandomString] = useState("")
 
  //handlesubmit coding
  const handlesubmit = async () => {
    // create a payload object with a username property and set the email state variable.
    const payload = {
      username: email
    }
    const res = await fetch(`${API}/users/forget-password`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })

    //wait for response and parse it as json and stored in data variable.
    const data = await res.json();

    //accessing the randomString property within the data object
    console.log(data.randomString)

    //check data object like error ,message and randomstring
    if (data.error) {
      setError(data.error)
    }
    if (data.message) {
      setMessage(data.message)
    }
    if (data.randomString) {
      setRandomString(data.randomString)
    }
  }
  return (
    <div className='container'>
      <div className='top'>
      <h2 className='container'>Forget Password?</h2>
      <Link style={{ color: "black" }} className='nav' aria-current="page" to="/">Home</Link>
      </div>
      <p>Please enter your registered email address we will get back to you with the reset password link</p>
      <label for="email" class="form-label">Email Address</label>
      <input type="email"
        className="form-control"
        id="email"
        placeholder="Enter your Email Id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-3" onClick={handlesubmit}>Submit</button>
      {error ? <p>{error}</p> : ""}
      {message ? <p>{message}</p> : ""}
      {message ?  <Link style={{ color: "black" }} className='nav' aria-current="page" to={`/reset-password/${randomString}`}>Reset Password Link</Link> : ""}
    </div>
  )
}

export default ForgetPassword