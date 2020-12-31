import React, {useState} from 'react';
import ContactPic from '../Assets/Image/contact.png';
import db from "./fire";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function Contact() {
const [firstName, setFirstName] = useState('')
const [surname, setSurname] = useState('')
const [email, setEmail] = useState('')
const [company, setCompany] = useState('')
const [message, setMessage] = useState('')

const onSubmit=(e)=>{
  e.preventDefault();
  try {
    db.collection('messages').add({
      firstName:firstName,
      surname:surname,
      email:email,
      company:company,
      message:message
    })
    
  } catch (error) {
    console.log('error', error)
    
  }
  e.target.reset()
  setFirstName('')
  setSurname('')
  setEmail('')
  setCompany('')
  setMessage('')

  toast.success('📬 Message Sent! ')
}




  return (
    <div id="Contact">
      <img className="float" alt="contact pic" src={ContactPic} />
      <section>
        <h1>Contact me</h1>
        <h4>Say Hello!</h4>
        <form onSubmit={onSubmit}>
          <input type='text' placeholder="First name *" required onChange={(e) => {
									setFirstName(e.target.value)
								}}/>
          <input type='text' placeholder="Surname *" required onChange={(e) => {
									setSurname(e.target.value)
								}} />
          <input type='email' placeholder="Email *" required onChange={(e) => {
									setEmail(e.target.value)
								}}/>
          <input type='text' placeholder="Company" onChange={(e) => {
									setCompany(e.target.value)
								}}/>
          <textarea type='text' placeholder="Message *" required onChange={(e) => {
									setMessage(e.target.value)
								}}></textarea>
          <button className= 'submit-button' type="submit">Send</button>
          <ToastContainer />
        </form>
      </section>
    </div>
  );
}
