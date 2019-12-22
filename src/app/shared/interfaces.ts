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
export interface Application {
    id?: number;
    offer_id: number;
    first_name: string;
    second_name: string;
    phone_number: string;
    date_of_birth: Date;
    city: string;
    education: number;
    university: string;
    field_of_study: string;
    previous_job: string;
    status?: number;
    created_at?: null;
    updated_at?: null;
    skills: Skill[];
    score: number;
}
export interface NewApplication {
    offer_id: string;
    first_name: string;
    second_name: string;
    phone_number: string;
    date_of_birth: string;
    city: string;
    education: number;
    university: string;
    field_of_study: string;
    previous_job: string;
    skills: Skill[];
}
export interface ColumnsToDisplay {
    name: string;
    data: any;
  }
