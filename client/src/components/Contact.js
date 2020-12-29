import React from 'react';
import ContactPic from '../Assets/Image/contact.png';

export default function Contact() {
  return (
    <div id="Contact">
      <img className="float" alt="contact pic" src={ContactPic} />
      <section>
        <h1>Contact me</h1>
        <h4>Say Hello!</h4>
        <form>
          <input placeholder="First name *" required />
          <input placeholder="Surname *" required />
          <input placeholder="Email *" required />
          <input placeholder="Company" />
          <textarea placeholder="Message *" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
