"use strict";

/*** PAGES - Home page should be first ***/
var pages = [{
  name: 'Home',
  label: 'Navigate to overview page',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: true,
  isVisible: true
}, {
  name: 'About',
  label: 'Navigate to this page to learn more about my education, previous roles and ethics',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: true,
  isVisible: false
}, {
  name: 'Projects',
  label: 'Navigate to this page to see some case studies from previous projects',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: true,
  isVisible: true
}, {
  name: 'Contact',
  label: 'Navigate to contact page',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: true,
  isVisible: true
}, {
  name: 'Sitemap',
  label: 'Navigate to the sitemap page',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: false,
  isVisible: true
}, {
  name: 'Privacy',
  label: 'Privacy and cookie policy page',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: false,
  isVisible: true
}, {
  name: 'Terms',
  label: 'Navigate to this page to learn more about terms and conditions.',

  get href() {
    return '#page=' + this.name.replace(/\s/g, '').toLowerCase();
  },

  get templatePath() {
    return '/pages/' + this.name.replace(/\s/g, '').toLowerCase();
  },

  isMain: false,
  isVisible: true
}];
/*** EXTERNAL LINKS ***/

var externalPages = [{
  name: 'LinkedIn',
  label: 'Open a new tab and see my profile on Linkedin',
  href: 'https://www.linkedin.com/in/kevin-liozon-39117bb3',
  isVisible: true
}, {
  name: 'Github',
  label: 'Open a new tab and see my profile on Github',
  href: 'https://github.com/kevinliozon',
  isVisible: true
}, {
  name: 'Stackshare',
  label: 'Open a new tab and see my profile on Stackshare',
  href: 'https://stackshare.io/kevinliozon/lead-product-designer-stack',
  isVisible: true
}];
/*** SIDENAVS FRAGMENTS ***/

var projectAnchors = [{
  name: 'Specifics',
  label: 'Go to specifics',
  href: '#specifics',
  target: 'specifics'
}, {
  name: 'Problem',
  label: 'Go to problem',
  href: '#problem',
  target: 'problem'
}, {
  name: 'Approach',
  label: 'Go to approach',
  href: '#approach',
  target: 'approach'
}, {
  name: 'Solution',
  label: 'Go to  solution',
  href: '#solution',
  target: 'solution'
}, {
  name: 'Outcomes',
  label: 'Go to outcomes',
  href: '#outcomes',
  target: 'outcomes'
}];
/*** BRANDS LIST ***/

var brands = [{
  id: 'b1',
  name: 'Avon',
  img: '/assets/img/brands/avon.png',
  imgAlt: 'Avon logo'
}, {
  id: 'b2',
  name: 'Chartered Financial Analyst',
  img: '/assets/img/brands/cfa.png',
  imgAlt: 'CFA logo'
}, {
  id: 'b3',
  name: 'Colt technology services',
  img: '/assets/img/brands/colt.png',
  imgAlt: 'Colt technology services logo'
}, {
  id: 'b4',
  name: 'Demant',
  img: '/assets/img/brands/demant.png',
  imgAlt: 'Demant logo'
}, {
  id: 'b5',
  name: 'Douglas and Gordon',
  img: '/assets/img/brands/dng.png',
  imgAlt: 'Douglas and Gordon logo'
}, {
  id: 'b6',
  name: 'Dropbox',
  img: '/assets/img/brands/dropbox.png',
  imgAlt: 'Dropbox logo'
}, {
  id: 'b7',
  name: 'Fuse',
  img: '/assets/img/brands/fuse.png',
  imgAlt: 'Fuse logo'
}, {
  id: 'b8',
  name: 'Lloyds Banking Group',
  img: '/assets/img/brands/lloydsbank.png',
  imgAlt: 'Lloyds Banking Group logo'
}, {
  id: 'b9',
  name: 'Macmillan Cancer Support',
  img: '/assets/img/brands/macmillan.png',
  imgAlt: 'Macmillan Cancer Support logo'
}, {
  id: 'b10',
  name: 'Migros',
  img: '/assets/img/brands/migros.png',
  imgAlt: 'Migros logo'
}, {
  id: 'b11',
  name: 'RSA insurance group',
  img: '/assets/img/brands/rsa.png',
  imgAlt: 'RSA insurance group logo'
}, {
  id: 'b12',
  name: 'Vodafone',
  img: '/assets/img/brands/vodafone.png',
  imgAlt: 'Vodafone logo'
}];
/*** HOME - PROJECTS GRID ***/

var projectsHome = [{
  id: 'ph1',
  name: 'Need to optimise your design process?',
  label: 'Project: Design process at Fuse',
  themes: ['Process', 'Management'],
  desc: 'See how we managed to nail a process that works and defines accountability for everyone with our product managers at Fuse.',
  img: '/assets/img/projects/fuse-process/thumbnail.jpg',
  imgAlt: 'Thumbnail showing cogs',
  href: '#page=projects/fuse-process',
  templatePath: '/pages/projects/fuse-process'
}, {
  id: 'ph2',
  name: 'Want to upskill your pool of design talents?',
  label: 'Project: Career ladder at Fuse',
  themes: ['Management', 'HR'],
  desc: 'We can work together towards making sure your designers keep motivated to upskills. Just like we did with our new career ladder in this case study.',
  img: '/assets/img/projects/fuse-careerladder/thumbnail.jpg',
  imgAlt: 'Thumbnail showing an allegory of career path as a road with milestones',
  href: '#page=projects/fuse-careerladder',
  templatePath: '/pages/projects/fuse-careerladder'
}, {
  id: 'ph3',
  name: 'Aim to design a consistent, accessible and scalable product?',
  label: 'Project: Design systems for non-designers at Fuse',
  themes: ['Design systems', 'Accessibility'],
  desc: 'Better getting things done properly from the start. A design system like this one will save you a lot of time and money with its reusable components.',
  img: '/assets/img/projects/fuse-system/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a hand grabbing another one in support',
  href: '#page=projects/fuse-system',
  templatePath: '/pages/projects/fuse-system'
}, {
  id: 'ph4',
  name: 'Not sure what tools can help your user research?',
  label: 'Project: User research tools at Fuse',
  themes: ['Research', 'Tools'],
  desc: 'Do not limit your research to interview transcripts and raw data but start refining these info the way we did at Fuse instead.',
  img: '/assets/img/projects/fuse-researchtools/thumbnail.jpg',
  imgAlt: 'Thumbnail showing two users and a cog',
  href: '#page=projects/fuse-researchtools',
  templatePath: '/pages/projects/fuse-researchtools'
}];
/*** HOME - PROJECTS CAROUSEL ***/

var projectsCarousel = [{
  id: 'pc1',
  name: 'Conducting an accessibility audit',
  label: 'Project: Accessibility audits at Fuse',
  themes: ['Accessibility', 'Client-facing'],
  desc: 'Compliance to WCAG accessibility standards could differentiate your organisation from the competition. This case study will focus on some steps to follow in order to achieve this objective.',
  img: '/assets/img/projects/fuse-a11y/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a hand grabbing another one in support',
  href: '#page=projects/fuse-a11y',
  templatePath: '/pages/projects/fuse-a11y'
}, {
  id: 'pc2',
  name: 'Designing dashboards',
  label: 'Project: Designing dashboards',
  themes: ['Data', 'Accessibility'],
  desc: 'How to make data easily interpretable to the user and drive their engagement? This case study is a collection of smaller ones that will show in which circumstances dashboards can help you.',
  img: '/assets/img/projects/fuse-dashboards/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a bar chart',
  href: '#page=projects/fuse-dashboards',
  templatePath: '/pages/projects/fuse-dashboards'
}, {
  id: 'pc3',
  name: 'The synergy between user flows and lo-fi designs',
  label: 'Project: The synergy between user flows and lo-fi designs',
  themes: ['Ideation', 'User flows'],
  desc: 'How to properly capture your users\' actions and finding solutions by iterating through lo-fi designs.',
  img: '/assets/img/projects/fuse-diagramslofi/thumbnail.jpg',
  imgAlt: 'Thumbnail showing an allegory of career path as a road with milestones',
  href: '#page=projects/fuse-diagramslofi',
  templatePath: '/pages/projects/fuse-diagramslofi'
}];
/*** PROJECTS GRID ***/

var projects = [{
  id: 'p1',
  name: 'Optimising a design process',
  label: 'Project: Design process at Fuse',
  type: 'management',
  // name of the svg icon
  filters: 'is-content is-manage is-featured',
  themes: ['Process', 'Management'],
  desc: 'Adapting a process for a medium sized organisation',
  beneficiary: 'Fuse',
  img: '/assets/img/projects/fuse-process/thumbnail.jpg',
  imgAlt: 'Thumbnail showing cogs',
  href: '#page=projects/fuse-process',
  templatePath: '/pages/projects/fuse-process',
  isVisible: true
}, {
  id: 'p2',
  name: 'Design systems for non-designers',
  label: 'Project: Design systems for non-designers at Fuse',
  type: 'design',
  filters: 'is-content is-design is-featured',
  themes: ['Design systems', 'Accessibility'],
  desc: 'Creating a non-designer friendly system',
  beneficiary: 'Fuse',
  img: '/assets/img/projects/fuse-system/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a design prototype',
  href: '#page=projects/fuse-system',
  templatePath: '/pages/projects/fuse-system',
  isVisible: true
}, {
  id: 'p3',
  name: 'Defining a career ladder for designers',
  label: 'Project: Career ladder at Fuse',
  type: 'documentation',
  filters: 'is-content is-doc is-featured',
  themes: ['Management', 'HR'],
  desc: 'Defining a career ladder tailored to your team',
  beneficiary: 'Fuse',
  img: '/assets/img/projects/fuse-careerladder/thumbnail.jpg',
  imgAlt: 'Thumbnail showing an allegory of career path as a road with milestones',
  href: '#page=projects/fuse-careerladder',
  templatePath: '/pages/projects/fuse-careerladder',
  isVisible: true
}, {
  id: 'p4',
  name: 'Tooling up your user research',
  label: 'Project: User research tools at Fuse',
  type: 'tool',
  filters: 'is-content is-tool is-featured',
  themes: ['Research', 'Tools'],
  desc: 'Providing the right tools for facilitating your user research',
  beneficiary: 'Fuse',
  img: '/assets/img/projects/fuse-researchtools/thumbnail.jpg',
  imgAlt: 'Thumbnail showing two users and a cog',
  href: '#page=projects/fuse-researchtools',
  templatePath: '/pages/projects/fuse-researchtools',
  isVisible: true
}, {
  id: 'p5',
  name: 'Conducting an accessibility audit',
  label: 'Project: Accessibility audits at Fuse',
  type: 'management',
  filters: 'is-content is-manage is-featured',
  themes: ['Accessibility', 'Client-facing'],
  desc: 'Auditing the accessibility of clients\' projects',
  beneficiary: 'Fuse',
  img: '/assets/img/projects/fuse-a11y/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a hand grabbing another one in support',
  href: '#page=projects/fuse-a11y',
  templatePath: '/pages/projects/fuse-a11y',
  isVisible: true
}, {
  id: 'p6',
  name: 'Designing dashboards',
  label: 'Project: Designing dashboards',
  type: 'design',
  filters: 'is-content is-design is-featured',
  themes: ['Data', 'Accessibility'],
  desc: 'Some good practices regarding dashboards',
  beneficiary: 'Multiple accounts',
  img: '/assets/img/projects/fuse-dashboards/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a bar chart',
  href: '#page=projects/fuse-dashboards',
  templatePath: '/pages/projects/fuse-dashboards',
  isVisible: true
}, {
  id: 'p7',
  name: 'The synergy between user flows and lo-fi designs',
  label: 'Project: The synergy between user flows and lo-fi designs',
  type: 'tool',
  filters: 'is-content is-tool is-featured',
  themes: ['Ideation', 'User flows'],
  desc: 'How user flows and designing lo-fi can help you nailing down the right solution.',
  beneficiary: 'Fuse',
  img: '/assets/img/projects/fuse-diagramslofi/thumbnail.jpg',
  imgAlt: 'Thumbnail showing a flow diagram',
  href: '#page=projects/fuse-diagramslofi',
  templatePath: '/pages/projects/fuse-diagramslofi',
  isVisible: true
}];
/*** NDA URLS LIST ***/

var protectedProjectsUrls = ['#page=projects/bt', '#page=projects/bt'];
