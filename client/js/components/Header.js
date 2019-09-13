import React from 'react';


const Header = () => {

  return (

    <header className="header">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="../../public/img/Big-City-Life.mp4" type="video/mp4" />
          <source src="../../public/img/Big-City-Life.webm" type="video/webm" />
        </video>
      </div>

      <h1 className="header-primary">
        <span className="header-primary__heading">Hello, I&apos;m</span>
        <br/>
        <br/>
        <span className="header-primary__name">ANTHONY WATSON</span>
        <br/>
        <span className="header-primary__info">Software, Engineer</span>
        <br/>
        <span className="header-primary__info">NYC</span>
      </h1>

    </header>
  )
}

// ProjectCard.propTypes = {
//   projects: PropTypes.object.isRequired
// }

export default Header;