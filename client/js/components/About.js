import React from 'react';

const About = () => {
  return (
    <div className="bio">

      <div className="bio__content">
        <div className="bio__img">
        </div>
        <div className="bio__text">
          <p>
            Hello, my name is Tony! I&apos;m a full stack engineer based in New York City, NY, with a passion for building things to solve problems and empowering people through tech. Most recently, I deployed a package to NPM called <a href="https://www.npmjs.com/package/module-cleaner" target="_newtab">module-cleaner</a> (aka Filtch) which recursively removes all of the unwanted <b>node_modules</b> folders from a given project directory
          </p>
        </div>
      </div>

      <div className="stack">
        <h1 className="stack__heading">{'I work mostly with the "P.E.R.N." stack'}</h1>

        <br />

        <div className="stack__card-container">
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-database"></use>
              </svg>
            </div>
            <div className="stack__text">
              <b>P.</b>ostgreSQL database for storage
            </div>
          </div>
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-drive1"></use>
              </svg>

            </div>
            <div className="stack__text">
              <b>E.</b>xpress.js framework for server creation and routing
            </div>
          </div>
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-publish"></use>
              </svg>

            </div>
            <div className="stack__text">
              <b>R.</b>eact.js library for rendering user interfaces to the DOM
            </div>

          </div>
          <div className="stack__card">
            <div className="stack__icon-box">
              <svg className="stack__icon">
                <use xlinkHref="../../public/img/sprite.svg#icon-cogs"></use>
              </svg>
            </div>
            <div className="stack__text">
              <b>N.</b>ode.js runtime environment to execute the code
            </div>
          </div>
        </div>

      </div>

      <div className="tech">
        <h1>Other Tech I have worked with:</h1>
        <div className="tech__item-container">
          <div className="tech__item">
            <img src="../../public/img/jquery_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/html_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/css_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/mssql_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/expo_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/react-native_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/webpack_logo.png" alt="jQuery Logo" />
          </div>
          <div className="tech__item">
            <img src="../../public/img/redux_logo.png" alt="jQuery Logo" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default About;