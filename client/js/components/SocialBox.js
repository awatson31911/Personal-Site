import React from 'react';

const SocialBox = ({fill, hover}) => {
  return (

    <div className="social-box">
      <a href="https://github.com/awatson31911/" target="_newtab" className="social-box__icon-box" alt="Github link">
        <svg className="social-box__icon">
          <use xlinkHref="../../public/img/sprite.svg#icon-github"></use>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/anthony-watson-7113b152/" className="social-box__icon-box" target="_newtab" alt="LinkedIn link">
        <svg className="social-box__icon">
          <use xlinkHref="../../public/img/sprite.svg#icon-linkedin"></use>
        </svg>
      </a>

      <a href="https://www.instagram.com/theboyskout/" className="social-box__icon-box" target="_newtab" alt="Instagram link">
        <svg className="social-box__icon">
          <use xlinkHref="../../public/img/sprite.svg#icon-instagram1"></use>
        </svg>
      </a>

      <a href="mailto: awatson31911@gmail.com" className="social-box__icon-box" target="_newtab" alt="Email link" rel="nofollow noopener noreferrer">
        <svg className="social-box__icon">
          <use xlinkHref="../../public/img/sprite.svg#icon-mail"></use>
        </svg>
      </a>

    </div >
  )
}

export default SocialBox;