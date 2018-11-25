import React, { Component } from 'react';
import ProjectCard from './ProjectsCard';
import SkillsCard from './SkillsCard';


import { projects, skills, roles } from '../utils/resumeObjects'



export default class App extends Component {
  constructor() {
    super()
  }



  componentDidMount() { }


  render() {
    return (
      <div>
        <section id="projects">
          <ProjectCard />
          <SkillsCard />
        </section>

        <section id="playground">

        </section>

        <section id="side-nav"> 
        
        </section>

      </div>
    )
  }
}