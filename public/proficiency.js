
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

export default generateProficiencies;