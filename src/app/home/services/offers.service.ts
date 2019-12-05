import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Offer } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  detailsVisibility = false;

  jobOffers: Offer[] = [
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

  constructor() {
   }
}
