import React from 'react';


const Header = () => {

  return (

    <div>
      <header className="main-navigation">

        <div className="main-navigation__list">
          <a href="#about" className="main-navigation__list-1">About</a>
          <a href="#projects" className="main-navigation__list-2">Projects</a>
          <a href="#skills" className="main-navigation__list-3">Skills</a>
          <a href="#playground" className="main-navigation__list-4">Playground</a>
          <a href="#contact" className="main-navigation__list-5">Contact</a>

          <div className="main-navigation__list-6">PULL ME</div>
        </div>

      </header>


      <div className="logo-box">
        <img src="../public/img/macbook.jpg" alt="Logo" className="logo" />
      </div>
      
    </div>
  )
}

// ProjectCard.propTypes = {
//   projects: PropTypes.object.isRequired
// }

export default Header;