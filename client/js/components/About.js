import React from 'react';

const About = () => {
  return (
    <div className="bio">

      <div className="bio__content">
        <div className="bio__img">
        </div>
        <div className="bio__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="stack">
        <h1>{'I mostly use the "P.E.R.N." Stack'}</h1>

        <br />

        <div className="stack__card-container">
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-database"></use>
              </svg>
            </div>
            <div className="stack__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-drive1"></use>
              </svg>

            </div>
            <div className="stack__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-publish"></use>
              </svg>

            </div>
            <div className="stack__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>

          </div>
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-cogs"></use>
              </svg>
            </div>
            <div className="stack__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </div>
          </div>
        </div>

      </div>

      <div className="tech">
        <h1>Other Tech I have worked with:</h1>
        <div className="tech__item-container">
          <div className="tech__item"></div>
          <div className="tech__item"></div>
          <div className="tech__item"></div>
          <div className="tech__item"></div>
          <div className="tech__item"></div>
          <div className="tech__item"></div>
        </div>
      </div>

    </div>
  )
}

export default About;