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

      <div className="bio__pern-container">
        <h1>P.E.R.N.</h1>

        <br />
        
        <div className="bio__pern-item-container">
          <div className="bio__pern-item"></div>
          <div className="bio__pern-item"></div>
          <div className="bio__pern-item"></div>
          <div className="bio__pern-item"></div>
        </div>

      </div>

      <div className="bio__tech-container">
        <h1>Other Tech I have worked with:</h1>
        <div className="bio__tech-item-container">
          <div className="bio__tech-item"></div>
          <div className="bio__tech-item"></div>
          <div className="bio__tech-item"></div>
          <div className="bio__tech-item"></div>
          <div className="bio__tech-item"></div>
          <div className="bio__tech-item"></div>
        </div>
      </div>

    </div>
  )
}

export default About;