import { Component, OnInit, Output } from '@angular/core';
import { Offer, Post, Skill, Offer2 } from 'src/app/shared/interfaces';
import { OffersService } from '../../services/offers.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobOffers: Offer[];
  jobOffers2: Offer2[];
  posts: Post[];
  searchInput = '';
  skills: Skill[];
  constructor(private offerService: OffersService, private httpService: HttpService) {
    this.jobOffers2 = this.offerService.jobOffers2;
    //this.jobOffers2 = this.offerService.jobOffers2;
    // this.posts=this.offerService.posts;
    // this.offerService.getPosts().subscribe(posty => this.posts = posty);
    //this.httpService.getOffers().subscribe(el => this.jobOffers = el);
    this.httpService.getSkills().subscribe(el => this.skills=el);
    
      //this.jobOffers=this.offerService.jobOffers;
      //console.log(this.jobOffers)
      this.offerService.jobOffers$.subscribe(el => this.jobOffers=el);
    
  }
  

  ngOnInit() {
  
  }
  show(){
    this.offerService.getOffers();
    console.log(this.offerService.jobOffers)
  }
}
