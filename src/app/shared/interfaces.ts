export interface Offer2 {
    id: number;
    name: string;
    description: string;
    qualifications: string;
    responsibilities: string;
    salary: number;
}
export interface Post {
    userId: number;
  id: number;
  title: string;
  body: string;
}
export interface Skill {
    id?: number;
    name: string;
    description: string;
    points: number;
    created_at?: null;
    updated_at?: null;
    pivot?: {
        offer_id: number;
        skill_id: number;
    };
}
export interface Offer {
    id:number;
    name:string;
    description: string;
    qualifications: string;
    responsibilities: string;
    salary: number;
    created_at: null;
    updated_at: null;
    skills: Skill[];
}
export interface newOffer {
    name:string;
    description: string;
    qualifications: string;
    responsibilities: string;
    salary: number;
    skills: Skill[];
    skills_id: number[];
}