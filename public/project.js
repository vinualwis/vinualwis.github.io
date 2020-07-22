/*
<template id="project">
  <article class="project invisible">
    <div class="project-content">
      <h3 class="project-title"></h3>
      <p class="project-description"></p>
    </div>
    <div class="tech-stack">
      <i class="fa fa-code" aria-hidden="true"></i>
    </div>
  </article>
</template>
*/

/*
<div class="award">
  <i class="fa fa-trophy" aria-hidden="true"></i>
  <span>2018 Hackamon General Stream First Prize</span>
</div>
*/

const projects = [
  {
    id: 'facialrecognition',
    title: 'Facial Verification Attendance Marking',
    description: 'I was the mobile developer of a hackathon team that created an award-winning proof of concept within 36 hours that revolutionises the way attendance marking is done at university. The app significantly simplifies the attendance marking process for students, tutors and lecturers alike through using geo-fencing and facial recognition AI to mark attendance through a mobile app.',
    stack: ['Java','Firebase', 'Microsoft Azure Face AI'],
    award: '2018 Hackamon General Stream First Prize',
  },
  {
    id: 'voiceassistant',
    title: '"Hey Monash" Voice Assistant',
    description: 'I was a front-end developer of a hackathon team that created an award-winning proof of concept voice assistant for Monash University students. The web app significantly simplified common student interactions with the student portal through leveraging voice recognition AI.',
    stack: ['HTML','CSS', 'Javascript'],
    award: '2016 Hackamon Connect Stream First Prize'
  },
  { 
    id: 'unishuttle',
    title: 'Unishuttle',
    description: `This is an Android app I conceived, designed, developed and tested to provide up-to-date Monash University Shuttle bus data
    with a particular emphasis on providing highly sought after seating availability data,
    which it crowd-sources using geo-fencing technology. This app also contains a beta feature 
    that uses computer vision, specifically mobile vision, technology to create bus passes through scanning 
    student IDs.`,
    stack: ['Java', 'Firebase', 'Google Mobile Vision']
  },
  {
    id: 'ar',
    title: 'Monash University Library AR Exhibition',
    description: `I was the augmented-reality experience designer and developer for this project conducted
    for Monash University Sir Louis Matheson Library. The project used cutting-edge technology to 
    showcase geographic landmarks of significance as well as explain their rich history.`,
    stack: ['ZappAR']
  },
  {
    id: 'connectionmanager',
    title: 'Telstra IoT Connection Manager',
    description: `I was a full-stack developer working predominantly on the backend APIs for this MVP project that simplifies and enhances connectivity 
    management for Telstra IoT machine-to-machine customers. In my role, I worked closely across layers to 
    deliver features that required the efficient transit of large amounts of data across the stack.
    A challenge that is ubquitious in the IoT sector.`,
    stack: ['ReactJs','ExpressJs + Typescript','AWS']
  },
];

/**
 * Generates the mark up for the award element
 * @param {string} award - Award description
 * @returns {HTMLDivElement} - Award element
 */
const generateAward = (award) => {
  const awardContainer = document.createElement('div');
  awardContainer.classList.add('award');
  const trophyIcon = document.createElement('i');
  trophyIcon.classList.add('fa','fa-trophy');
  const awardDescription = document.createElement('span');
  awardDescription.textContent = award
  awardContainer.append(trophyIcon,awardDescription);
  return awardContainer;
}

/**
 * Generates the project elements
 * @returns {void}
 */
const generateProjects = () => {
  const projectCollectionElement = document.querySelector('.projects-collection');
  const projectTemplate = document.querySelector('template#project');
  projects.forEach(
    (
      {
        id, 
        title, 
        description, 
        stack, 
        award
      }
    ) => {
      const projectClone = projectTemplate.content.cloneNode(true);
      const projectElement = projectClone.querySelector('article');
      projectElement.id = id;
      const projectTitleElement= projectClone.querySelector('.project-title');
      projectTitleElement.textContent = title;
      if (award) {
        const projectContentElement = projectClone.querySelector('div.project-content');
        const awardElement = generateAward(award);
        projectContentElement.insertBefore(awardElement,projectTitleElement);
      }
      const projectDescriptionElement = projectClone.querySelector('.project-description');
      projectDescriptionElement.textContent = description;
      const projectStack = projectClone.querySelector('.tech-stack');
      stack.forEach((tech) => {
        const spanElement = document.createElement('span');
        spanElement.textContent = tech;
        projectStack.appendChild(spanElement);
      });
      const moreInWorksElement = document.querySelector('#moreworks');
      projectCollectionElement.insertBefore(projectClone,moreInWorksElement);
    }
  )
}

export default generateProjects;