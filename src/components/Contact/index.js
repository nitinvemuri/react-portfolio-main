import React, { useState } from 'react';

import { validateEmail } from '../../utils/helper';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', questions: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, questions } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };


  return (
    <section>
      <h1 data-testid="h1tag">Contact me at nitinvemuri@gmail.com</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} placeholder="email" onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message" row = "2">Questions:</label>
          <textarea name="message" rows="4" defaultValue={questions} placeholder="question" onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
