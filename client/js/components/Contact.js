import React from 'react';

import SocialBox from './SocialBox';

const ContactForm = () => {
  return (
    <div className="contact">

      <div className="contact__text">
        If anything on my page piqued your interest, let&apos;s connect! I&apos;m currently looking for Full-Time work as either an engineer/developer or client-facing, technical contact. I&apos;m also always open to freelance opportunities, interesting projects or just a friendly &apos;How do you do?&apos;
      </div>

      <div className="contact__btn-container">
        <h1 className="contact__heading">Say goodday! &rarr;</h1>
        <SocialBox />
      </div>


    </div>
  )
}


export default ContactForm;