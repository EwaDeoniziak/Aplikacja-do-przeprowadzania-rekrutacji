import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { OffersService } from 'src/app/home/services/offers.service';
import { Subscribable, Subscription } from 'rxjs';
import { Skill, newOffer } from 'src/app/shared/interfaces';
import { HttpService } from 'src/app/home/services/http.service';
import { MatSelectionList } from '@angular/material';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit, OnDestroy {
  offerName = '';
  salary: number = null;
  offerDescription = '';
  responsibilities = '';
  qualifications = '';
  newSkillVisibility = false;


  //new skill
  skillName = '';
  points = null;
  skillDescription = '';

  skillsSubscription: Subscription;
  skillsToCheck: Skill[];

  selectedOptions = [];
  @ViewChild('Skills',{static: false}) Skills: MatSelectionList;

  //skills to send
  skills_id: number[] = [];
  skills: Skill[] = [];

  invalidMessageVisibility = false;


  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  onSelection(event, value) {
    this.skills_id = [];
    this.selectedOptions = value;
    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.skills_id.push(this.selectedOptions[i].value.id);
    }
    console.log(this.skills_id);
  }

  showNewSkillForm() {
    this.newSkillVisibility = true;
  }

  addSkill() {
    if (this.skillName && this.skillDescription && this.points) {
      const skill: Skill = { name: this.skillName, description: this.skillDescription, points: this.points }
      this.skills.push(skill);
      this.skillName = '';
      this.skillDescription = '';
      this.points = null;
      this.invalidMessageVisibility = false;
    }
    else {
      this.invalidMessageVisibility = true;
    }
  }

  deleteSkill(skill: Skill) {
    this.skills = this.skills.filter(el => el !== skill);
  }

  addOffer() {
    const newOffer: newOffer = {
      name: this.offerName,
      description: this.offerDescription,
      salary: this.salary,
      qualifications: this.qualifications,
      responsibilities: this.responsibilities,
      skills: this.skills,
      skills_id: this.skills_id
    }
    console.log(newOffer);
    this.http.addOffer(newOffer).subscribe(el => console.log(el));
    this.offerService.jobOffers$.subscribe(el => console.log(el));

    // empty values after addOffer
    this.offerName = '';
    this.salary = null;
    this.offerDescription = '';
    this.responsibilities = '';
    this.qualifications = '';
    this.Skills.deselectAll();
    this.skills = [];
  }

  constructor(private offerService: OffersService, private http: HttpService) {
    this.skillsSubscription = this.offerService.skills$.subscribe(el => this.skillsToCheck = el);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.skillsSubscription.unsubscribe();
  }

  test() {
    console.log(this.offerName)
    console.log(this.salary)
    console.log(this.offerDescription)
    console.log(this.qualifications)
    console.log(this.responsibilities)
    console.log(this.skills)
    console.log(this.skills_id)
  }
}
