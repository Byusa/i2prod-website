export type ResearchStatus =
  | "Peer Reviewed"
  | "Preprint"
  | "Research"
  | "In Progress";

export interface ResearchLink {
  label: string;
  url: string;
}

export interface ResearchProject {
  slug: string;
  title: string;
  shortTitle: string;
  field: string;
  description: string;
  authors?: string[];
  methods: string[];
  dataset?: string;
  venue?: string;
  year: number;
  status: ResearchStatus;
  doi?: string;
  links?: ResearchLink[];
  featured: boolean;
}