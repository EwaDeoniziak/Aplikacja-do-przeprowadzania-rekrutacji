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

  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  
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

  getEducation(nr: number): string {
    if (nr == 1){
      return 'Szkoła podstawowa';
    } else if(nr==2){
      return 'Szkoła średnia';
    } else{
      return 'Szkoła wyższa';
    }
  }
  getStatus(element: Application): string {
    if(element.status === 2) {
      return 'Zaprosiłeś na kolejny etap rekrutacji';
    }
    else if(element.status === 3) {
      return 'Wysłałeś odpowiedź odmowną';
    } else {
      return 'Jeszcze nie odpowiedziałeś na to zgłoszenie';
    }
  }
  test() {
    console.log(this.checkedId);
  }


}


