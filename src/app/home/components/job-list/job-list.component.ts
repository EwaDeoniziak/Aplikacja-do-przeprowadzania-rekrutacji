import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Offer, Post, Skill, Offer2 } from 'src/app/shared/interfaces';
import { OffersService } from '../../services/offers.service';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, OnDestroy {

  jobOffers: Offer[];
  offersSubscription: Subscription;
  searchInput = '';

  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor(private offerService: OffersService, private httpService: HttpService) {
      this.offersSubscription = this.offerService.jobOffers$.subscribe(el => this.jobOffers=el);
    
  }
  

  ngOnInit() {
  
  }

  ngOnDestroy() {
    this.offersSubscription.unsubscribe();
  }
}
