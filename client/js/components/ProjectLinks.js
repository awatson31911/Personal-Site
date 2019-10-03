import React from 'react';

const ProjectLinks = ({ fill, hover, link, gitHub }) => {
  
  let deployedIcon = null;
  if (link) {
    deployedIcon = (
      <a href={link} className="project-links__icon-box" target="_newtab" alt="Project link">
        <svg className="project-links__icon">
          <use xlinkHref="../../public/img/sprite.svg#icon-browser"></use>
        </svg>
      </a>
    )
  }

  return (

    <div className="project-links">

      <a href={gitHub} target="_newtab" className="project-links__icon-box" alt="Project Github link">
        <svg className="project-links__icon">
          <use xlinkHref="../../public/img/sprite.svg#icon-github"></use>
        </svg>
      </a>

      {deployedIcon}

    </div >
  )
}

export default ProjectLinks;