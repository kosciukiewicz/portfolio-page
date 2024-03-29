export interface AboutData {
  name: string;
  position: string;
  location: string;
  about: string;
  email_address: string;
  github: string;
  linked_in: string;
  skills: AboutSkill[];
}

export interface AboutSkill {
  skill_type: string;
  skills: string[];
}

export interface Projects {
  projects: Project[];
  in_progress: InProgressProject[];
}

export interface Project {
  title: string;
  description: string;
  cover_image_url: string;
  read_more_link: string;
  tags: string[];
}

export interface InProgressProject {
  title: string;
  description: string;
}

export interface PublicationLink {
  name: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  proceedings: string;
  conference: string;
  year: number;
  links: PublicationLink[] | undefined;
}

export interface ExperienceItem {
  order: number;
  title: string;
  organization: string;
  description_filename: string;
  years: string;
}

export interface EducationItem {
  order: number;
  title: string;
  organization: string;
  years: string;
}
