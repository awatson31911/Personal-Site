import React, { Component } from 'react';
import Header from './Header';
import ProjectCard from './ProjectsCard';
import SkillsCard from './SkillsCard';
import VideoBG from './VideoBG';
import SideNavigation from './SideNavigation';


import { projects, skills, roles } from '../utils/resumeObjects'



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      projects,
      skills,
      roles,
      selectedProject: projects[0],
      selectedSkill: skills[2],
      selectedRole: {}
    }
  }



  componentDidMount() {}


  render() {
    return (
      <div>

        <Header />
        
        <section id="projects">
          <ProjectCard projects={this.state.projects} selectedProject={this.state.selectedProject} />
        </section>

        <section id="skills">
          <SkillsCard skills={this.state.skills} selectedSkill={this.state.selectedSkill}/>
        </section>

        <section id="playground">
          <VideoBG />
        </section>

        <SideNavigation />


      </div>
    )
  }
}