export type SelectedPage = "hero" | "resume" | "projects" | "contact";

export type Project = {
  id: number;
  num:string;
  image: string;
  title: string;
  description: string;
  github: string;
  notion: string;
  demo?: string;
  stack: ProjectStack[];
};

export type ProjectStack = {
  name: string;
};

export type DataState = {
  failMessage: string;
  successMessage: string;
  errors: {
    sender?: string[];
    email?: string[];
    content?: string[];
  };
};
