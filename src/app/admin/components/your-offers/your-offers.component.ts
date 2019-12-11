import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/home/services/offers.service';
import { Offer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-your-offers',
  templateUrl: './your-offers.component.html',
  styleUrls: ['./your-offers.component.scss']
})
export class YourOffersComponent implements OnInit {
  yourOffers: Offer[];
  searchInput: string;

   //SPINNER
   color = 'primary';
   mode = 'indeterminate';
   value = 50;

  constructor(private offersService: OffersService) {
    this.offersService.jobOffers$.subscribe(el => this.yourOffers = el);
   }

  ngOnInit() {
  }

}
