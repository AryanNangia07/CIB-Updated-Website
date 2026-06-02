export interface Member {
  name: string;
  position: string;
  year: string;
  major: string;
  bio: string;
  photo_url?: string;
  coffee_chat_url?: string;
}

export interface Placement {
  year: number;
  name: string;
  company: string;
  sector: string;
  role: string;
}

export interface Pitch {
  company: string;
  ticker: string;
  sector: string;
  date: string;
  analyst: string;
  thesis: string;
  position: 'Long' | 'Short';
  pdf_url?: string;
}

export interface CurriculumTopic {
  week: number;
  title: string;
  fundamental: string;
  quantitative: string;
}

export interface EducationVP {
  name: string;
  role: string;
  photo_url: string;
  initials: string;
  quote: string;
  bioParagraphs: string[];
}

