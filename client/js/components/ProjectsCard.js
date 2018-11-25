import {React, Component} from 'react';


export default ProjectCard = (props) => {
  
  return (
    <div className="row">
            <div className="col-2-of-3">
              <div className="row">
                  <div className="col-1-of-2">
                    Snapshot of site (Home/Splash)
                  </div>
                  <div className="col-1-of-2">
                    Project Description
                  </div>
              </div>

              <div className="row">
                <div className="col-1-of-2">
                  Project Title
                </div>
                <div className="col-1-of-2">
                    Snapshot of site (Action)
                </div>
              </div>
            </div>
            
            <div className="col-1-of-3">
                  List of Projects
            </div>

          </div>
  )
}