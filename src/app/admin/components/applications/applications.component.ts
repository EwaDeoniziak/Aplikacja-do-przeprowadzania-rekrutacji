import { Component, OnInit, ViewChild } from '@angular/core';
import { Application, Skill, ColumnsToDisplay, Offer } from 'src/app/shared/interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSort, MatTableDataSource } from '@angular/material';
import { OrderByPipe } from '../../../shared/pipes/order-by.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { OffersService } from 'src/app/home/services/offers.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ApplicationsComponent implements OnInit {

  offers: Offer[];
  checkedId: number;
  applicationsVisible: Application[];
  applications: Application[];

  applications1: Application[] = [
    {
      offer_id: 1,
      first_name: 'imie1',
      second_name: 'nazwisko1',
      phone_number: '111',
      date_of_birth: new Date(),
      city: 'miasto1',
      education: 1,
      university: '',
      field_of_study: '',
      previous_job: 'praca1',
      skills: [{
        name: 'xd',
        description: 'xd',
        points: 2
      }],
      score: 30
    },
    {
      id: 2,
      offer_id: 1,
      first_name: 'imie2',
      second_name: 'nazwisko2',
      date_of_birth: new Date(),
      phone_number: '222',
      city: 'miasto2',
      education: 2,
      university: '',
      field_of_study: '',
      previous_job: '',
      skills: [{
        name: 'xd2',
        description: 'xd2',
        points: 4
      }],
      score: 45
    },
    {
      id: 3,
      offer_id: 2,
      first_name: 'imie3',
      second_name: 'nazwisko3',
      date_of_birth: new Date(),
      phone_number: '333',
      city: 'miasto3',
      education: 3,
      university: 'AGH',
      field_of_study: 'infa',
      previous_job: 'praca3',
      skills: [{
        name: 'xd3',
        description: 'xd3',
        points: 5
      },
      {
        name: 'xd4',
        description: 'xd4',
        points: 5
      }],
      score: 40
    },
  ];
  dataSource;
  dataToDisplay = ['first_name', 'second_name', 'score'];
  columnsToDisplay = ['first_name', 'second_name', 'score'];
  expandedElement: Application | null;

  constructor(private orderBy: OrderByPipe, private filter: FilterPipe, private offersService: OffersService) {
    this.offersService.jobOffers$.subscribe(el => {
      this.offers = el;
    });
    this.offersService.applications$.subscribe(el => {
    this.applications = el;
    this.applicationsVisible = this.applications;
    this.orderBy.transform(this.applicationsVisible, 'score');
    this.applicationsVisible = this.filter.transform(this.applications, 'offer_id', this.checkedId);
    console.log(this.applicationsVisible);
    this.dataSource = new MatTableDataSource(this.applicationsVisible);
    });
  }



  //@ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    //this.dataSource.sort = this.sort;
  }

  filterApplications(checkedId: number) {
    this.applicationsVisible = this.filter.transform(this.applications, 'offer_id', checkedId);
    console.log(this.applications);
    console.log(this.applicationsVisible);
    this.dataSource = new MatTableDataSource(this.applicationsVisible);
  }
  test() {
    console.log(this.checkedId);
  }
}


