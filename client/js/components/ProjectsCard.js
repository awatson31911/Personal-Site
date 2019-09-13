import React, { Component } from 'react';
//import Radium from 'radium';
import PropTypes from 'prop-types';


class ProjectCard extends Component {

  constructor({ projects, selectedProject, ...props }) {
    super()
    this.state = {
      projects,
      selectedProject,
      selectedImageId: selectedProject.pics[1].id
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
                    style.boxShadow = '8px 9px 11px -1px #2121217a';
                  } else {
                    style.backgroundImage = `linear-gradient(#7c9daf85, #46555e85), url(${pic.url})`;
                  } 
                  style[':hover'] = {
                    backgroundImage: `url(${pic.url})`,
                    zIndex: 1,
                    boxShadow: '8px 9px 11px -1px #2121217a'
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
            <div className="card-two-imgs__list">

              <ul>
                {
                  Object.keys(state.projects).map((projectId) => {
                    return (
                      <li key={state.projects[projectId].name + state.projects[projectId].id}
                        value={projectId}
                        style={state.projects[projectId].id === state.selectedProject.id
                          ? { backgroundColor: '#212121', color: '#fffcd2' }
                          : null}
                        alt={state.projects[projectId].name}
                        onClick={
                          (e) => {
                            this.setState({
                              selectedProject: state.projects[e.target.value],
                              selectedImageId: state.projects[e.target.value].pics[1].id
                            })
                          }
                        }>
                        {state.projects[projectId].name}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
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