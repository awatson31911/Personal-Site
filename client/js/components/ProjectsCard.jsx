import React, { Component } from 'react';


export default class ProjectCard extends Component {

  constructor({ projects, selectedProject, ...props }) {
    super()
    this.state = {
      projects,
      selectedProject
    }
  }

  render() {
    let state = this.state

    return (
      <div className="card-two-imgs">
        <div className='row'>
          <div className="col-3-of-4">
            <div className="card-two-imgs__img-box">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="card-one-img__photo UTILITY-CLASS-FOR-MAC-STENCIL" alt="Macbook Computer">
                    <img src={state.selectedProject.pics[0]} alt="Website Snapshot" className="card-two-imgs__photo card-two-imgs__photo--1" />
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="paragraph">{state.selectedProject.description}</div>
                </div>
              </div>

              <div className="row">
                <div className="col-1-of-2">
                  <h1 className="heading-primary">{state.selectedProject.name}</h1>
                </div>
                <div className="col-1-of-2">
                  <img src={state.selectedProject.pics[1]} alt="Website Snapshot" className="card-two-imgs__photo card-two-imgs__photo--2" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-4">
            <ul className="list-of-things list-items">
              {
                state.projects.map((project) => {
                  return (
                    <li key={project.name} className="list-of-things__thing" alt={project.name}>
                      {project.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

  // ProjectCard.propTypes = {
  //   projects: PropTypes.object.isRequired
  // }