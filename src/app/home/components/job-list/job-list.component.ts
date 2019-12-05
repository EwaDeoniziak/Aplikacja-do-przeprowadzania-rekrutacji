import { Component, OnInit, Output } from '@angular/core';
import { Offer } from 'src/app/shared/interfaces';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobOffers: Offer[];
  searchInput = '';
  constructor(private offerService: OffersService) {
    this.jobOffers = this.offerService.jobOffers;
   }

  ngOnInit() {
  }
}
