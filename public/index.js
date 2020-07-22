const proficiencies = [
  {
    language: 'Javascript',
    proficiency: 4,
  },
  {
    language: 'HTML5',
    proficiency: 4
  },
  {
    language: 'CSS3',
    proficiency: 4
  },
  {
    language: 'Typescript',
    proficiency: 4
  },
  {
    language: 'NodeJs',
    proficiency: 4
  },
  {
    language: 'ExpressJs',
    proficiency: 5
  },
  {
    language: 'Jest',
    proficiency: 4
  },
  {
    language: 'Java',
    proficiency: 4
  },
  {
    language: 'Python',
    proficiency: 4
  },
  {
    language: 'PostgreSQL',
    proficiency: 4
  },
  {
    language: 'SQL',
    proficiency: 4
  },
  {
    language: 'C',
    proficiency: 3
  },
  {
    language: 'ReactJs',
    proficiency: 3
  },
  {
    language: 'MongoDB',
    proficiency: 3
  },
  {
    language: 'GIT',
    proficiency: 4
  },
  {
    language: 'VSCode',
    proficiency: 4
  },
  {
    language: 'Android Studio',
    proficiency: 4
  },
  {
    language: 'AWS Cognito',
    proficiency: 3
  },
];

/**
 * Generates proficiency HTML elements for each proficiency defined in the proficiencies array
 * @returns {void}
 */
const generateProficiencies = () => {
  const proficienciesSection = document.querySelector('section.proficiencies');
  const proficiencyTemplate = document.querySelector('#proficiency');
  proficiencies.forEach(
    ({language,proficiency}) => {
      const proficiencyClone = proficiencyTemplate.content.cloneNode(true);
      const proficiencyTitle = proficiencyClone.querySelector('article.proficiency > h3');
      proficiencyTitle.textContent = language;
      const starElement = proficiencyClone.querySelectorAll('article.proficiency > .star-rating > span');
      for (let i = 0; i < proficiency; i ++){
        starElement[i].classList.add('checked');
      };
      proficienciesSection.appendChild(proficiencyClone);
    }
  );
}

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

window.onload = () => {
	setTimeout(
		() => {
			const headerElement = document.querySelector('header');
			headerElement.classList.remove('invisible');
			headerElement.classList.add('slidein');
		}
		,300
	);
	generateProficiencies();
	generateProjects();
};

/**
 * Adds CSS animation classes to elements in the Skills section of website
 * @return {void} 
 */
const skillsAnimation = () => {
	const descriptionTitle = document.querySelector('.description > h2');
	descriptionTitle.classList.add('slideup');
	descriptionTitle.classList.remove('invisible');
	setTimeout(() => {
		const descriptionText = document.querySelector('.description > p');
		descriptionText.classList.add('slideup');
		descriptionText.classList.remove('invisible');
		setTimeout(() => {
			const proficiencies = document.querySelector('.proficiencies');
			proficiencies.classList.add('slideup');
			proficiencies.classList.remove('invisible');
		},300);
	}, 300);
};

const projectsAnimation = () => {
	const projectTitle = document.querySelector('#projects .description h2');
	projectTitle.classList.add('slideup');
	projectTitle.classList.remove('invisible');
	setTimeout(() => {
		const facialRec = document.querySelector('#facialrecognition');
		facialRec.classList.add('slideup');
		facialRec.classList.remove('invisible');
		setTimeout(() => {
			const voiceAssistant = document.querySelector('#voiceassistant');
			voiceAssistant.classList.add('slideup');
			voiceAssistant.classList.remove('invisible');
			setTimeout(() => {
				const unishuttle = document.querySelector('#unishuttle');
				unishuttle.classList.add('slideup');
				unishuttle.classList.remove('invisible');
				setTimeout(() => {
					const ar = document.querySelector('#ar');
					ar.classList.add('slideup');
					ar.classList.remove('invisible');
					setTimeout(() => {
						const connectionManager = document.querySelector('#connectionmanager');
						connectionManager.classList.add('slideup');
						connectionManager.classList.remove('invisible');
						setTimeout(() => {
							const moreWorks = document.querySelector('#moreworks');
							moreWorks.classList.add('slideup');
							moreWorks.classList.remove('invisible');
						},200);
					},200);
				},200);
			},200);
		},200);
	},300);
};

const options = {
	root: null,
	rootMargin: '0px',
	threshold: [0,0.25,0.5,0.75,1]
};

const handleIntersection = (entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio >= 0.25) {
			skillsAnimation();
		}
	});
};

const handleProjectIntersection = (entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio >= 0.25) {
			projectsAnimation();
		}
	});
};

const projectsObserver = new IntersectionObserver(handleProjectIntersection,options);
const projectSection = document.querySelector('#projects');
projectsObserver.observe(projectSection);

let intersectionObserver = new IntersectionObserver(handleIntersection,options);
const skillsSection = document.querySelector('#languages');
intersectionObserver.observe(skillsSection);

window.onscroll = event => {
	const parallax = () => {
		const top = window.pageYOffset;
		const layers = document.querySelectorAll('.parallax-layer');
		let speed, yPos;
		layers.forEach((layer) => {
			let currLayer = layer;
			speed = layer.getAttribute('data-speed');
			yPos = Math.round(-(top*speed/100));
			currLayer.setAttribute('style', 'transform: translateY(' + yPos + 'px)');
		});
	};
	window.requestAnimationFrame(parallax);
	// Ensures that the header remains fixed to the top of the page
	const navBar = document.querySelector('header');
	const sticky = navBar.offsetTop;
	if (window.pageYOffset >= sticky) {
		navBar.classList.add('sticky');
	}
	else {
		navBar.classList.remove('sticky');
	}
};
