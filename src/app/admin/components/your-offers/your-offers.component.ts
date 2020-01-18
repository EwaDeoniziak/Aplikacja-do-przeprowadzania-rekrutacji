import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/home/services/offers.service';
import { HttpService } from 'src/app/home/services/http.service';
import { Offer } from 'src/app/shared/interfaces';
import { MatSnackBar } from '@angular/material';
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

  constructor(private offersService: OffersService,private httpService: HttpService,
  private _snackBar: MatSnackBar) {
    this.offersService.jobOffers$.subscribe(el => this.yourOffers = el);
   }

  ngOnInit() {
  }
  delete(id:number) {
    this.httpService.deleteOffer(id).subscribe(res => {
      this.message = 'Usunięto ofertę!';
      this.openSnackBar();
    }, err => {
      this.message = 'Coś poszło nie tak';
      this.openSnackBar();
    });
  }
  //MODAL
  message = 'Ok';
  action = '';
  openSnackBar() {
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
    });
  }
}
