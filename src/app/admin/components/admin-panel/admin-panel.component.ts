import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/home/services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
