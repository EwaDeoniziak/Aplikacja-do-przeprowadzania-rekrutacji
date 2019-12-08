import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer, Post, Skill, newOffer } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  jobOffers$: Observable<Offer[]>;
  skills$: Observable<Skill[]>;

  constructor(private http: HttpClient) {
    this.getOffers().subscribe(el => console.log(el));
    this.jobOffers$=this.getOffers();
    this.skills$=this.getSkills();
   }

   getOffers():Observable<Offer[]>{
    return this.http.get<Offer[]>('/api/offers');
   }
   getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
   }
   getSkills() {
     return this.http.get<Skill[]>('/api/skills');
   }
   addOffer(offer: newOffer){
     return this.http.post<newOffer>('/api/offers',offer);
   }
}

