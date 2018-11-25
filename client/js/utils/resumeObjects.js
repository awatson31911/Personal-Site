/* --------------- Skills -------------- */
const react = {
  name: 'React.js',
  exposure: 'Used in Project(s)',
  logoImg: ''
} 
const redux = {
  name: 'Redux',
  exposure: 'Used in Project(s)',
  logoImg: ''
}
const express = {
  name: 'Express.js',
  exposure: 'Used in Project(s)',
  logoImg: ''
} 
const d3 = {
  name: 'D3.js',
  exposure: 'Used in Project(s)',
  logoImg: ''
}
const node = {
  name: 'Node.js',
  exposure: 'Used in Project(s)',
  logoImg: ''
}
const reactNative = {
  name: 'React Native',
  exposure: 'Used in Project(s)',
  logoImg: ''
}

const expo = {
  name: 'Expo',
  exposure: 'Used in Project(s)',
  logoImg: ''
}

export const skills = {react, redux, express, d3, node, reactNative, expo}

/* --------------- Project -------------- */
const atomizer = {
  name: 'Atomizer',
  description: 'A web application that displays an expansive and interactive representation of the related topics to a user-provided keyword, via a web-crawl of the keyword’s Wikipedia Page.',
  skills: [react, redux, express, d3, node],
  link: 'http://atomize.live'
}

const okMakeIt = {
  name: 'OK, Make it',
  description: 'An iPhone/Android compatible native application that utilizes real-time transit feeds provided by the NYC MTA to alert the user to when the next train will arrive at a station they’ve selected.',
  skills: [ reactNative, redux, expo],
  link: 'https://github.com/awatson31911/ok_MakeIt'
}

export const projects = {atomizer, okMakeIt}

/* --------------- Roles -------------- */
const appSupportEng = {
  title: 'Application Support Engineer',
  company: 'Black Mountain Systems',
  description: ['Troubleshoot client Production issues; convey potential resolutions to product and implementations teams and deploy', 'Translate technical processes and provide training to non-technical clients']
}

const customerEng = {
  title: 'Customer Sucess Engineer',
  company: 'Lorem Technologies',
   description: ['Built additional features in front-end, provided troubleshooting and consulted clients with web applications built on Squarespace/WordPress platforms', 'Provided clients with site roadmaps, including General Design, Design for Convergence and SEO']
}

export const roles = {appSupportEng, customerEng}