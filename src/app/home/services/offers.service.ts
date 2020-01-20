import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { Offer, Offer2, Post, Skill, Application } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  detailsVisibility = false;
  jobOffers$: Observable<Offer[]>;
  skills$: Observable<Skill[]>;
  applications$: Observable<Application[]>;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.jobOffers$=this.httpService.getOffers();
    this.skills$=this.httpService.getSkills();
    this.applications$ = this.httpService.getApplications();
  }
}
