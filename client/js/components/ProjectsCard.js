import React, { Component } from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';
import ProjectLinks from './ProjectLinks';


class ProjectCard extends Component {

  constructor({ projects, selectedProject, ...props }) {
    super()
    this.state = {
      projects,
      selectedProject,
      selectedImageId: selectedProject.pics[0].id
    }
  }

  handleImgClick(imgId) {
    this.setState({ selectedImageId: imgId })
  }

  componentDidMount() {
    // document.getElementsByClassName('card-two-imgs__photo')[0].style.padding = '0'
    // document.getElementsByClassName('card-two-imgs__photo')[0].onMouseEnter(()=>{

    //   document.getElementsByClassName('card-two-imgs__photo')[0].style.padding = '8rem'
    // })

    // document.getElementsByClassName('card-two-imgs__photo')[0].onMouseLeave(()=>{
    //   document.getElementsByClassName('card-two-imgs__photo')[0].style.padding = '0'
    // })
  }

  render() {
    let state = this.state

    return (
      <div className="card-two-imgs">
        <div className='row'>
          <div className="col-3-of-4">
            <div className="card-two-imgs__img-box">

              {
                state.selectedProject.pics.map((pic) => {
                  let style = {}
                  if (pic.id === state.selectedImageId) {
                    style.backgroundImage = `url(${pic.url})`;
                    style.zIndex = 1;
                  } else {
                    style.backgroundImage = `linear-gradient(#7c9daf85, #46555e85), url(${pic.url})`;
                  }

                  return (
                    <div key={pic.id}
                      alt="Website Snapshot"
                      className={`card-two-imgs__photo-${pic.id + 1}`}
                      style={style}
                      onClick={() => this.handleImgClick(pic.id)}
                    >
                    </div>
                  )

                })
              }

              <div className="card-two-imgs__descript">{state.selectedProject.description}</div>

              <br />

              <hr />
            </div>
          </div>

          <div className="col-1-of-4">
            {/* <div > */}

            <ul className="card-two-imgs__list">
              {
                Object.keys(state.projects).map((projectId) => {
                  return (
                    <li key={state.projects[projectId].name + state.projects[projectId].id} className="card-two-imgs__item">
                      <a className="card-two-imgs__item-text"
                        value={projectId}
                        alt={state.projects[projectId].name}
                        style={state.projects[projectId].id === state.selectedProject.id
                          ? { color: '#387497' }
                          : null}
                        onClick={
                          (e) => {
                            e.preventDefault();
                            console.log('the target ---->', e.target, 'the value--->', e.target.getAttribute('value'), 'the current Target--->', e.currentTarget, 'current value--->', e.currentTarget.getAttribute('value'))
                            this.setState({
                              selectedProject: state.projects[e.target.getAttribute('value')],
                              selectedImageId: state.projects[e.target.getAttribute('value')].pics[0].id
                            })
                          }}>{state.projects[projectId].name}</a>
                      <div className="card-two-imgs__item-links">
                        <ProjectLinks link={state.projects[projectId].liveLink} gitHub={state.projects[projectId].codeLink} />
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            {/* </div> */}
          </div>

        </div >
      </div >
    )
  }
}

// export default Radium(ProjectCard);
export default ProjectCard;

  // ProjectCard.propTypes = {
  //   projects: PropTypes.object.isRequired
  // }