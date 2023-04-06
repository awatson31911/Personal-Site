import React, { Component } from 'react';

import NavBar from './NavBar';
import Header from './Header';
import ProjectCard from './ProjectsCard';
import About from './About';
import Contact from './Contact';
// import SkillsCard from './SkillsCard';
// import VideoBG from './VideoBG';
// import SideNavigation from './SideNavigation';


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


  render() {
    return (
      <div>

        <NavBar />
        <Header />
        
        <section id="section-about">
          <About  />
        </section>

        <section id="section-projects">
          <ProjectCard projects={this.state.projects} selectedProject={this.state.selectedProject} />
        </section>
        
        <section id="section-contact">
          <Contact />
        </section>
      </div>
    )
  }
}