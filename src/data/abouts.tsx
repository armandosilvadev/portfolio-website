import type { About } from "../types/about";

export const abouts: About[] = [
  {
    key: "react",
    title: <i className="fa-brands fa-react"></i>,
    descriptionText: (
      <>
        Using the <strong>React</strong> library to implement component creating
        dynamic and interactive applications.
      </>
    ),
  },
  {
    key: "code",
    title: <i className="fa-solid fa-code"></i>,
    descriptionText: (
      <>
        Using <strong>TypeScript</strong> to implement safety in the
        application, making it scalable and trustable.
      </>
    ),
  },
  {
    key: "pallete",
    title: <i className="fa-solid fa-palette"></i>,
    descriptionText: (
      <>
        With the use of <strong>CSS</strong> the project will look clean,
        responsive and really good looking.
      </>
    ),
  },
];
