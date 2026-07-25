import type { Project, TechStack } from '../types/project';
import homeLoginPage from '../assets/img/projects/loginpage/home.png';

const loginPageTechStack: TechStack[] = [
  {
    tech: 'TypeScript',
    stack: 'frontend',
  },
  {
    tech: 'React',
    stack: 'frontend',
  },
  {
    tech: 'Vite',
    stack: 'frontend',
  },
  {
    tech: 'React Router',
    stack: 'frontend',
  },
  {
    tech: 'TanStack Query',
    stack: 'frontend',
  },
  {
    tech: 'Axios',
    stack: 'frontend',
  },
  {
    tech: 'CSS',
    stack: 'frontend',
  },
  {
    tech: 'CSS Modules',
    stack: 'frontend',
  },
  {
    tech: 'Java',
    stack: 'backend',
  },
  {
    tech: 'Spring Boot',
    stack: 'backend',
  },
  {
    tech: 'Spring Security',
    stack: 'backend',
  },
  {
    tech: 'JWT',
    stack: 'backend',
  },
  {
    tech: 'PostgreSQL',
    stack: 'database',
  },
];

export const projects: Project[] = [
  {
    id: 'login-page',
    title: 'Login Page',
    link: 'https://login-page-olive-five.vercel.app',
    github: 'https://github.com/armandosilvadev/login-page',
    description:
      'A full-stack application built for learning and portfolio purposes, using React/TypeScript on the frontend and Java Spring Boot on the backend. ' +
      'With PostgreSQL as database.\n' +
      'The application uses JSON Web Tokens (JWT) for secure authentication and includes user registration, login, protected routes, and account deletion.',
    techstack: loginPageTechStack,
    images: {
      image: homeLoginPage,
      altText: 'login page home',
    },
  },
];
