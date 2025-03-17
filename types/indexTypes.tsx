
export type ApearanceContextType = {
    theme : string,
    themeHandler : (theme : string) => void,
}

export type CardType = {
    src: string;
    title: string;
    field: string;
    color: string;
    description: string;
    id: number;
  };

export type Projecto = {
    title: string;
    field: string;
    livedemo: string;
    github: string;
    src: string;
    color: string;
    usage: string[];
    description: string;
    skills: string[];
    date: string;
    languages: string[];
    technologies: string[];
    features: string[];
    video: string;
    frameworks: string[];
    pics: string[];
    pdf: string;
    id: number;
}
