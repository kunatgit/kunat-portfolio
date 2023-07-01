import {
  frontend,
  backend,
  ux,
  prototyping,
  css,
  docker,
  figma,
  git,
  graphql,
  html,
  java,
  javascript,
  mysql,
  nodejs,
  postgresql,
  reactjs,
  reactjs2,
  redux,
  rubyrails,
  springboot,
  sqlserver,
  tailwind,
  typescript,
  matirialui,
  nextjs,
  svn,
  comingsoonBlack,
  comingsoonWhite,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  logo,
  logo_color,
  logo_w,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software API Service',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'React.js',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Javascript',
    icon: javascript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'JAVA Springboot',
    icon: springboot,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'Matirial UI',
    icon: matirialui,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'SQL Server',
    icon: sqlserver,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'SVN',
    icon: svn,
  },
];

const experiences = [
  {
    title: 'Bachelor of Science',
    company_name: 'Computer Science - Mahasarham University',
    icon: logo_w,
    iconBg: '#333333',
    date: '2017 - 2021',
  },
  {
    title: 'Cooperative Education',
    company_name: 'Avalant Co.,Ltd.',
    icon: logo_w,
    iconBg: '#333333',
    date: 'Jun. 2020 - Oct. 2020',
    detail1: '• Absolute Spine Care Web application' ,
    detail2: '• Sports Authority of thailand Web application' ,
  },
  {
    title: 'Developer',
    company_name: 'Avalant Co.,Ltd.',
    icon: logo_w,
    iconBg: '#333333',
    date: 'Oct. 2020 - Apr. 2023',
    detail1: '• Sports Authority of thailand Web application',
    detail2: '• CMSP management of KBTG Web application',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'ThaiLife Outsourced by TP Consulting',
    icon: logo_w,
    iconBg: '#333333',
    date: 'Apr. 2023 - Present',
    detail1: '• Webprescreen Web application',
    detail2: '• i-Service Web application',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Coming Soon',
    description: 'Prepare to encounter new projects in the future.',
    image: comingsoonBlack,
    repo: '/project',
    demo: '/',
  },
  {
    id: 'project-2',
    name: 'Coming Soon',
    description: 'Prepare to encounter new projects in the future.',
    image: comingsoonWhite,
    repo: '/project',
    demo: '/',
  },
  {
    id: 'project-3',
    name: 'Coming Soon',
    description: 'Prepare to encounter new projects in the future.',
    image: comingsoonBlack,
    repo: '/project',
    demo: '/',
  },
  {
    id: 'project-4',
    name: 'Coming Soon',
    description: 'Prepare to encounter new projects in the future.',
    image: comingsoonWhite,
    repo: '/project',
    demo: '/',
  },
  {
    id: 'project-5',
    name: 'Coming Soon',
    description: 'Prepare to encounter new projects in the future.',
    
    image: comingsoonBlack,
    repo: '/project',
    demo: '/',
  },
];

export { services, technologies, experiences, projects };
