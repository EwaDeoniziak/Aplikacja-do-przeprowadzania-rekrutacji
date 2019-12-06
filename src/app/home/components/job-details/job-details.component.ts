import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/shared/interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  detailsVisibility = false;
  @Input() offer: Offer;
  text = 'Rozwiń';
  applyButtonVisibility: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.isLoggedInObs.subscribe(el => this.applyButtonVisibility = el);
    console.log(this.applyButtonVisibility);
  }
  changeDetailsVisibility() {
    if (this.detailsVisibility === true) {
      this.detailsVisibility = false;
      this.text = 'Rozwiń';
    } else {
      this.detailsVisibility = true;
      this.text = 'Zwiń';
    }
  }
  apply(offer: Offer) {
    this.router.navigate(['/../../../userPanel/sendingApplication', offer.id]);
  }


}
