import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { Offer, Offer2, Post, Skill } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  detailsVisibility = false;
  //jobOffers: Offer[];
  //posts: Post[];
  //skills: Skill[];
  jobOffers$: Observable<Offer[]>;
  jobOffers2: Offer2[] = [
    {
      id: 1, name: 'PHP developer',
      description: 'Przykładowy opis na stanowisko PHP developer',
      qualifications: 'Przykładowe wymagania na stanowisko PHP developer',
      responsibilities: 'Przykładowe obowiązki na stanowisko  PHP developer',
      salary: 4500
    },

    {
      id: 2, name: 'Front-end developer',
      description: 'Przykładowy opis na stanowisko Front-end developer',
      qualifications: 'Przykładowe wymagania na stanowisko Front-end developer',
      responsibilities: 'Przykładowe obowiązki na stanowisko Front-end developer',
      salary: 4000
    },

    {
      id: 3, name: 'Project manager',
      description: 'Przykładowy opis na stanowisko Project manager',
      qualifications: 'Przykładowe wymagania na stanowisko Project manager',
      responsibilities: 'Przykładowe obowiązki na stanowisko Project manager',
      salary: 6000
    },
    {
      id: 4, name: 'Java developer',
      description: 'Przykładowy opis na stanowisko Java developer',
      qualifications: 'Przykładowe wymagania na stanowisko Java developer',
      responsibilities: 'Przykładowe obowiązki na stanowisko Java developer',
      salary: 5000
    },
  ];

  constructor(private http: HttpClient, private httpService: HttpService) {
    //this.getOffers().subscribe(el => console.log(el));
    //this.httpService.getOffers().subscribe((el: Offer[]) => this.jobOffers = el)
    this.jobOffers$=this.httpService.getOffers();
  }
}
