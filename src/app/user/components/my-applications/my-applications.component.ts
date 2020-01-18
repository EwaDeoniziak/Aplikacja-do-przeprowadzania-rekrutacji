import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/home/services/http.service';
import { Application, MyApplication} from 'src/app/shared/interfaces';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit {
  statusName: string;
  myApplications: MyApplication[];

  //SPINNER
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  applications: Application2[];
  offerName: string;

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
  // test(id: number){
  //   this.http.getOneOffer(id).subscribe(el=> {
  //     this.offerName=el.name;
  //   });
  // }

}

export interface Application2 {
  id: number;
  name: string;
  status: number;
}


