import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OffersService } from 'src/app/home/services/offers.service';
import { Offer, Skill, Application, NewApplication } from 'src/app/shared/interfaces';
import { HttpService } from 'src/app/home/services/http.service';
import { JsonPipe, DatePipe } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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
  university = 'brak';
  fieldOfStudy = 'brak';
  previousJob = '';
  checkedSkills:Skill[] = [];
  date: Date;

  //MODAL
  message = 'Ok';
  action = '';
  openSnackBar() {
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
    });
    console.log(this.message, this.action);
  }

  onSelection(event, value) {
    this.checkedSkills = [];
    this.selectedOptions = value;
    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.checkedSkills.push(this.selectedOptions[i].value);
    }
    console.log(this.checkedSkills);
}



  constructor(private route: ActivatedRoute, 
    private offersService: OffersService, 
    private http: HttpService, private json: JsonPipe, 
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar) {
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
    this.university='brak';
    this.fieldOfStudy='brak';
  }

  sendApplication() {
    const application: NewApplication = {
      offer_id: this.id+'',
      first_name: this.firstname,
      second_name: this.lastname,
      phone_number: this.phoneNumber,
      date_of_birth: this.getDate(),
      city: this.city,
      education: parseInt(this.education) ,
      university: this.university,
      field_of_study: this.fieldOfStudy,
      previous_job: this.previousJob,
      skills: this.checkedSkills
      //date: this.date

    }
    console.log(application);
    console.log(this.json.transform(application));
    this.http.sendApplication(application).subscribe(res => {
      this.message = 'Twoja aplikacja została pomyślnie wysłana!';
      this.openSnackBar();
    }, err => {
      this.message = 'Coś poszło nie tak';
      this.openSnackBar();
    });
    this.education = '1';
    this.firstname = '';
    this.lastname = '';
    this.phoneNumber = '';
    this.city = '';
    this.university = 'brak';
    this.fieldOfStudy = 'brak';
    this.previousJob = '';
    this.date = null;
  }
  getApplications(){
    this.http.getApplications().subscribe(el => console.log(el));
  }

  getDate() : string{
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const day = this.date.getDate();
    return year + '-' + month + '-' + day;
  }
}
