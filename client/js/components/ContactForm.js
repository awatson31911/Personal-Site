import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact__form">
        <form action="#" className="form">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Full Name" id="name" required />
            <label htmlFor="name" className="form__label">Full Name</label>
          </div>

          <div className="form__group">
            <input type="email" className="form__input" placeholder="Email Address" id="email" required />
            <label htmlFor="email" className="form__label">Email Address</label>
          </div>

          <div className="form__group">
            <input type="text" className="form__input" placeholder="Title" id="title" />
            <label htmlFor="title" className="form__label">Title</label>
          </div>

          <div className="form__group">
            <input type="text" className="form__input" placeholder="Company" id="company" />
            <label htmlFor="company" className="form__label">Company</label>
          </div>

          <div className="form__group">
            <button className="btn btn--pink">Get in touch &rarr;</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default ContactForm;