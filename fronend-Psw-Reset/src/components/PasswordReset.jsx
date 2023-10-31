import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { API } from '../global'

//password reset component
function PasswordReset() {
  const { randomString } = useParams()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  //handlesubmit coding
  const handlesubmit = async () => {
    const payload = {
      newPassword: password,
      confirmPassword: confirmPassword
    }
    const res = await fetch(`${API}/users/reset-password/${randomString}`, {
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
    if (data.message) {
      setMessage(data.message)
    }
  }
  return (
    <div className='container'>
      <div className='top'>
      <h2 className='container'>Reset Account Password</h2>
      <Link style={{ color: "black" }} className='nav' aria-current="page" to="/">Login</Link>
      </div>
      <label for="password" class="col-form-label">Password</label>
      <input type="password"
        className="form-control"
        id="password"
        placeholder="Enter your new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label for="confirmPassword" class="col-form-label">Re-enter Password</label>
      <input type="password"
        className="form-control"
        id="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-3" onClick={handlesubmit}>Reset Password</button>
      {error ? <p>{error}</p> : ""}
      {message ? <p>{message}</p> : ""}
    </div>
  )
}

export default PasswordReset