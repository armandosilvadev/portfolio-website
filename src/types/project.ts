interface projectImgs {
  image: string;
  altText: string;
}

export interface TechStack {
  stack: 'frontend' | 'backend' | 'database';
  tech: string;
}

export interface Project {
  id: string | number;
  images?: projectImgs;
  link?: string;
  github: string;
  title: string;
  description: string;
  techstack: TechStack[];
}
