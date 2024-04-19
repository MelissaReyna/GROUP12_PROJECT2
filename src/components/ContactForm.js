import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userEmail === '') {
      setMessage('You must enter an email');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      emailjs
        .sendForm(
          'service_1nllsid',
          'template_op2u9yl',
          e.target,
          'jtPMwhZnrHV16l0xY'
        )
        .then(
          () => {
            setMessage('You have been registered successfully!');
            setTimeout(() => {
              setMessage('');
            }, 3000);
          },
          (error) => {
            alert('Oops! Something went wrong...', error);
          }
        );
      setUserEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="footer_form" id="contact-form">
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        className="footer_input"
        id="contact-user"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button type="submit" className="button">
        Subscribe
      </button>
      <p className="footer_message" id="contact-message">
        {message}
      </p>
    </form>
  );
}

export default ContactForm;
