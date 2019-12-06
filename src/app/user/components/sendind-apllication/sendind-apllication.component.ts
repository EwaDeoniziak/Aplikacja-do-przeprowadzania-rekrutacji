import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OffersService } from 'src/app/home/services/offers.service';
import { Offer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-sendind-apllication',
  templateUrl: './sendind-apllication.component.html',
  styleUrls: ['./sendind-apllication.component.scss']
})
export class SendindApllicationComponent implements OnInit, OnDestroy {
  id: number;
  offer: Offer = null;
  subscription: Subscription;
  jobOffers: Offer[];
  constructor(private route: ActivatedRoute, private offersService: OffersService) {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    //this.offer = this.offersService.jobOffers.filter(el => el.id === this.id)[0];
    //console.log(this.offer);
    this.offersService.jobOffers$.subscribe(el => {
      this.jobOffers=el;
      this.offer = this.jobOffers.filter(el => el.id === this.id)[0];
    });
  }
  
  ngOnInit() {
    console.log(this.id);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
