import type { About } from '../types/about';

export const abouts: About[] = [
  {
    key: 'react',
    title: <i className='fa-brands fa-react'></i>,
    descriptionText: (
      <>
        Using the <strong>React</strong> library to implement components
        creating dynamic and interactive applications.
      </>
    ),
  },
  {
    key: 'typescript',
    title: <i className='fa-brands fa-typescript'></i>,
    descriptionText: (
      <>
        Using <strong>TypeScript</strong> to implement safety in the
        application, making it scalable and trustable.
      </>
    ),
  },
  {
    key: 'java',
    title: <i className='fa-brands fa-java'></i>,
    descriptionText: (
      <>
        With <strong>Java</strong> and <strong>Spring Boot</strong>, the backend
        is scalable, secure, and easy to maintain.
      </>
    ),
  },
  {
    key: 'postgresql',
    title: <i className='fa-solid fa-database'></i>,
    descriptionText: (
      <>
        Using <strong>PostgreSQL</strong> as the database to securely store and
        manage application data.
      </>
    ),
  },
  {
    key: 'pallete',
    title: <i className='fa-solid fa-palette'></i>,
    descriptionText: (
      <>
        With the use of <strong>CSS</strong>, the project will look clean,
        responsive and really good looking.
      </>
    ),
  },
];
