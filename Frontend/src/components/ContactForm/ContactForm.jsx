import React, { useState } from 'react'
import './ContactForm.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  // const [formStatus, setFormStatus] = React.useState('Send')
  const navigate=useNavigate();
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [mail,setMail]=useState("");
  const [branch,setBranch]=useState("");
  const [msg,setMsg]=useState("");
  async function handleSubmit(e){
    e.preventDefault();
    console.log(fname,lname,mail,branch,msg);
    // setFormStatus('Submitting...')
    const res=await axios.post("http://localhost:5000/api/v1/registration",{fname,lname,mail,branch,msg})
if(res.data.success===true){
  alert("Response Sent Successfully")
  navigate("/")

}
  }
  return (
    
<div className="container mt-5">
      <h2 className="mb-3" style={{"textAlign": "center"} }>Register Yourself Now  📝</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            First Name
          </label>
          <input className="form-control" type="text" id="fname" value={fname} onChange={(e)=>setFname(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Last Name
          </label>
          <input className="form-control" type="text" id="lname" value={lname} onChange={(e)=>setLname(e.target.value)}  required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" value={mail} id="email" onChange={(e)=>setMail(e.target.value)}  required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="branch">
            Branch
          </label>
          <input className="form-control" type="text" id="branch" value={branch} required onChange={(e)=>setBranch(e.target.value)}  />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" value={msg} required onChange={(e)=>setMsg(e.target.value)}  />
        </div>
        <button className="btn btn-danger" type="submit">
          {/* {formStatus} */}
          SUBMIT
        </button>
      </form>
    </div>
    
   

  )
}

export default ContactForm