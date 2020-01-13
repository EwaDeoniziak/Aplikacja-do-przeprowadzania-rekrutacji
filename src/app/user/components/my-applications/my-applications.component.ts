import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/home/services/http.service';
import { Application} from 'src/app/shared/interfaces';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit {
  statusName: string;
  myApplications: Application[];

  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  applications: Application2[] = [
    {id:1, name:'Front-end developer', status:0},
    {id:2, name:'Back-end developer', status:2},
    {id:3, name:'Project manager', status:1},
  ];

  constructor(private http: HttpService) { 
    this.http.getMyApplications().subscribe(res => 
      {
      console.log(res);
       this.myApplications = res;
      });
  }

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
  test(){
    console.log('test');
  }

}

export interface Application2 {
  id: number;
  name: string;
  status: number;
}
