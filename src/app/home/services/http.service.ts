import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Offer, Post, Skill, newOffer, Application, NewApplication, MyApplication } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  jobOffers$: Observable<Offer[]>;
  skills$: Observable<Skill[]>;

  constructor(private http: HttpClient, private jsonPipe: JsonPipe) {
    this.getOffers().subscribe(el => {
      //console.log(el);
    });
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
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Accept', 'application/json')
    headers = headers.append('Authorization', `Bearer ${token}` );
    //console.log(headers);
    return this.http.get<Application[]>('/api/applications', {headers});
   }
   sendApplication(application: NewApplication){
      let headers = new HttpHeaders();
      let token = localStorage.getItem('token');
      headers = headers.append('Accept', 'application/json')
      headers = headers.append('Authorization', `Bearer ${token}` );
      // console.log(headers);
      // console.log(application);
      // console.log(headers);
      // console.log(this.jsonPipe.transform(application));
      return this.http.post<NewApplication>('/api/applications', application, {headers});
     
   }

   getMyApplications() {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${token}` );
    //console.log(headers);
    return this.http.get<MyApplication[]>('/api/allUserApplications', {headers});
   }

   getOneOffer(id: number) {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${token}` );
    return this.http.get<Offer>('/api/offers/'+id+'', {headers});
   }
   deleteOffer(id:number) {
     let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${token}` );
    return this.http.delete<Offer>('/api/offers/'+id+'', {headers});
   }
  }
