import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OffersService } from 'src/app/home/services/offers.service';
import { Offer, Skill } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-sendind-apllication',
  templateUrl: './sendind-apllication.component.html',
  styleUrls: ['./sendind-apllication.component.scss']
})
export class SendindApllicationComponent implements OnInit, OnDestroy {

  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  id: number;
  offer: Offer = null;
  subscription: Subscription;
  offerSubscription: Subscription;
  jobOffers: Offer[];
  selectedOptions = [];


  
  //DATA
  education = '1';
  firstname = '';
  lastname = '';
  phoneNumber = '';
  city = '';
  university = '';
  fieldOfStudy = '';
  previousJob = '';
  checkedSkills:Skill[] = [];

  onSelection(event, value) {
    this.checkedSkills = [];
    this.selectedOptions = value;
    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.checkedSkills.push(this.selectedOptions[i].value);
    }
    console.log(this.checkedSkills);
}



  constructor(private route: ActivatedRoute, private offersService: OffersService) {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    //this.offer = this.offersService.jobOffers.filter(el => el.id === this.id)[0];
    //console.log(this.offer);
    this.offerSubscription = this.offersService.jobOffers$.subscribe(el => {
      this.jobOffers=el;
      this.offer = this.jobOffers.filter(el => el.id === this.id)[0];
    });
  }
  
  ngOnInit() {
    console.log(this.id);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.offerSubscription.unsubscribe();
  }
  test(){
    
    console.log(this.education);
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.phoneNumber);
    console.log(this.city);
    console.log(this.university);
    console.log(this.fieldOfStudy);
    console.log(this.checkedSkills)
  }
  changeUniversityValue(){
    this.university='';
    this.fieldOfStudy='';
  }
}
