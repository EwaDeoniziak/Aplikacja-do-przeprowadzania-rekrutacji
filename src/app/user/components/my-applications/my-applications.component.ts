import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit {
  statusName: string;
  applications: Application[] = [
    {id:1, name:'Front-end developer', status:0},
    {id:2, name:'Back-end developer', status:2},
    {id:3, name:'Project manager', status:1},
  ];

  constructor() { }

  checkStatusName(item: Application): string{
    if(item.status === 1) {
      this.statusName = 'Pzykro nam, ale niestety nie udało się przejść do dalszego etapu rekrutacji.';
    }
    else if(item.status === 2) {
      this.statusName = 'Gratulacje! Zgłoszenie zostało pozytywnie rozpatrzone. Zapraszamy do kontaktu w sprawie kolejnego etapu rekrutacji.';
    }
    else {
      this.statusName = 'Zgłoszenie nie zostało jeszcze rozpatrzone.';
    }
    return this.statusName;
  }

  ngOnInit() {
  }

}

export interface Application {
  id: number;
  name: string;
  status: number;
}
