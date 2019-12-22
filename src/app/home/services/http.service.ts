import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer, Post, Skill, newOffer, Application, NewApplication } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  jobOffers$: Observable<Offer[]>;
  skills$: Observable<Skill[]>;

  constructor(private http: HttpClient, private jsonPipe: JsonPipe) {
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
   getApplications(){
     return this.http.get<Application[]>('/api/applications');
   }
   sendApplication(application: NewApplication){
     console.log(application);
     console.log(this.jsonPipe.transform(application));
     return this.http.post<NewApplication>('/api/applications', application);
     
   }
}

