import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OffersService } from 'src/app/home/services/offers.service';
import { Offer, Skill, Application, NewApplication } from 'src/app/shared/interfaces';
import { HttpService } from 'src/app/home/services/http.service';

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
  date: Date;

  onSelection(event, value) {
    this.checkedSkills = [];
    this.selectedOptions = value;
    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.checkedSkills.push(this.selectedOptions[i].value);
    }
    console.log(this.checkedSkills);
}



  constructor(private route: ActivatedRoute, private offersService: OffersService, private http: HttpService) {
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
    
    console.log(parseInt(this.education));
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.phoneNumber);
    console.log(this.city);
    console.log(this.university);
    console.log(this.fieldOfStudy);
    console.log(this.checkedSkills);
    console.log(this.date);
    console.log(this.previousJob);
  }
  changeUniversityValue(){
    this.university='';
    this.fieldOfStudy='';
  }

  sendApplication() {
    const application: NewApplication = {
      offer_id: this.id,
      first_name: this.firstname,
      last_name: this.lastname,
      phone_number: this.phoneNumber,
      date_of_birth: this.date,
      city: this.city,
      education: parseInt(this.education) ,
      university: this.university,
      field_of_study: this.fieldOfStudy,
      previous_job: this.previousJob,
      skills: this.checkedSkills
      //date: this.date

    }
    this.http.sendApplication(application);
  }
  getApplications(){
    this.http.getApplications().subscribe(el => console.log(el));
  }
}
