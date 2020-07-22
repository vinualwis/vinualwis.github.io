import generateProficiencies from './proficiency.js';
import generateProjects from './project.js';

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
