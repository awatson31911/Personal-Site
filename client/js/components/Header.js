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

      <div className="header-primary">
        <h1 className="header-primary__heading">Hello, I&apos;m</h1>
        <br/>
        <br/>
        <h1 className="header-primary__name">ANTHONY WATSON</h1>
        <br/>
        <p className="header-primary__info">Software, Engineer</p>
        <p className="header-primary__info">NYC</p>
      </div>

    </header>
  )
}

// ProjectCard.propTypes = {
//   projects: PropTypes.object.isRequired
// }

export default Header;