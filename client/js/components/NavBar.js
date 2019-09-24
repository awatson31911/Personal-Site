import React from 'react';


const NavBar = () => {

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">
        &nbsp;
        </span>
      </label>
      <div className="navigation__background">
        &nbsp;
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#section-about" className="navigation__link">About</a></li>
          <li className="navigation__item"><a href="#section-projects" className="navigation__link">Projects</a></li>
          <li className="navigation__item"><a href="#section-contact" className="navigation__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
  // return (

  //   <div>
  //     <header className="main-navigation">

  //       <div className="main-navigation__list">
  //         <a href="#about" className="main-navigation__list--1">About</a>
  //         <a href="#projects" className="main-navigation__list--2">Projects</a>
  //         <a href="#skills" className="main-navigation__list--3">Skills</a>
  //         {/* <a href="#playground" className="main-navigation__list--4">Playground</a>
  //         <a href="#contact" className="main-navigation__list--5">Contact</a> */}
  //       </div>

  //         {/* <div id="main-navigation__pull-out js-main-navigation__pull-out" onClick= { headerSlide }>PULL ME</div> */}

  //     </header>


  //     <div className="logo-box">
  //       <img src="../public/img/macbook.jpg" alt="Logo" className="logo" />
  //     </div>

  //   </div>
  // )
}

// ProjectCard.propTypes = {
//   projects: PropTypes.object.isRequired
// }

export default NavBar;