import React from 'react'

const SendEmail = () => {

  return (
    <div style={{border:"1px solid Green"}}>
        <label>Enter Email</label>
      <input type='text' placeholder='Enter Email to send MSG'/><br/>
      <button>Send Email</button>
    </div>
  )
}

export default SendEmail;
