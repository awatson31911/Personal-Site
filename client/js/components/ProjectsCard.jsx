import React from 'react';


const ProjectCard = ({ projects, selectedProject, ...props }) => {

  return (

    <div className="card-two-imgs">
      <div className='row'>
        <div className="col-3-of-4">
          <div className="row">
            <div className="col-1-of-2">
              <div className="card-one-img__photo UTILITY-CLASS-FOR-MAC-STENCIL"  alt="Macbook Computer">
                <img src={selectedProject.pics[0]} alt="Website Snapshot" className="card-two-imgs__photo card-two-imgs__photo--1"/>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="paragraph">{selectedProject.description}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-2">
              <h1 className="heading-primary">{selectedProject.name}</h1>
            </div>
            <div className="col-1-of-2">
              <img src={selectedProject.pics[1]} alt="Website Snapshot" className="card-two-imgs__photo card-two-imgs__photo--2"/>
            </div>
          </div>
        </div>

        <div className="col-1-of-4">

        </div>

      </div>
    </div>
  )
}

// ProjectCard.propTypes = {
//   projects: PropTypes.object.isRequired
// }

export default ProjectCard;