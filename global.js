/*** PAGES ***/
const pages = [{
    name: 'Home',
    label: 'Navigate to home page',
    href: '#page=home',
    templatePath: '/home',
    target: '_top',
    isMain: true
}, {
    name: 'About & ethics',
    label: 'Learn more about my education, previous roles and ethics',
    href: '#page=about',
    templatePath: '/about',
    target: '_top',
    isMain: true
}, {
    name: 'Case studies',
    label: 'See some case studies from previous projects',
    href: '#page=projects',
    templatePath: '/projects',
    target: '_top',
    isMain: true
}, {
    name: 'Driving change',
    label: 'Read about a change management case study',
    href: '#page=change',
    templatePath: '/change',
    target: '_top',
    isMain: true
}, {
    name: 'Sitemap',
    label: 'Navigate to the sitemap',
    href: '#page=sitemap',
    templatePath: '/sitemap',
    target: '_top',
    isMain: false
}, {
    name: 'Cookie policy',
    label: 'Learn more about this website\'s cookie policy',
    href: '#page=cookie',
    templatePath: '/cookie',
    target: '_top',
    isMain: false
}, {
    name: 'Terms & Conditions',
    label: 'Terms & Conditions. What you need to know before reusing the content of this website',
    href: '#page=terms',
    templatePath: '/terms',
    target: '_top',
    isMain: false
}];

/*** EXTERNAL LINKS ***/
const externalLinks = [{
    name: 'Email me',
    label: 'Contact me via email',
    href: 'mailto:kevinliozonpro@gmail.com',
    target: '_top',
    isMain: true
}, {
    name: 'LinkedIn',
    label: 'Connect with me on Linkedin',
    href: 'https://www.linkedin.com/in/kevin-liozon-39117bb3',
    target: '_blank',
    isMain: true
}];

/*** CONTAINERS ***/
const wrapTemplate = document.getElementById('wrap');
const wrapHeaderNav = document.getElementById('header-nav');
const wrapFooterNav = document.getElementById('footer-nav');
