

export type sortOptionsType = {
  since?: "daily" | "weekly" | "monthly";
  spoken_language_code?: string;
  prog_language?: string;
};

export type gitUserType = {
  avatar?: string;
  href?: string;
  username?: string;
};


export type repoType = {
  builtBy?: gitUserType[];
  currentPeriodStars:number;
  forks?: number;
  stars?: number;
  languageColor?: string;
  language?: string;
  description?: string;
  author?: string;
  name?: string;
  url?: string;
};


export type devType = {
  avatar?: string;
  name?: string;
  repo?: {
    description?: string;
    name?: string;
    url?: string;
  };
  url?: string;
  username?: string;
  type?:"organization"|"user";
};