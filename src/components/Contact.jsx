import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact-container" className="container flex-container">
      <h1>Contact</h1>
      <p>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I'll get back to you as soon as possible.
      </p>
      <div className="form-container">
        <form action="post" className="registration-form flex-container">
          <input type="text" name="name" placeholder="NAME" />
          <input type="text" name="email" placeholder="EMAIL" />
          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE"
          ></textarea>
        </form>
        <div className="button-container flex-container">
          <button className="submit-btn" type="submit" name="submit-btn">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
