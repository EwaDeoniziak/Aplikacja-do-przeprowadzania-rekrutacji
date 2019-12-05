import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { JobListComponent } from './home/components/job-list/job-list.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { AuthComponent } from './home/components/auth/auth.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { UserMainPageComponent } from './user/components/user-main-page/user-main-page.component';
import { MyApplicationsComponent } from './user/components/my-applications/my-applications.component';
import { SendindApllicationComponent } from './user/components/sendind-apllication/sendind-apllication.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: '', redirectTo: 'jobList', pathMatch: 'full'},
    {path: 'jobList', component: JobListComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'auth', component: AuthComponent}
  ]},
  {path: 'userHome', component: UserHomeComponent, children: [
    {path: '', redirectTo: 'userMainPage', pathMatch: 'full'},
    {path: 'userMainPage', component: UserMainPageComponent},
    {path: 'jobList', component: JobListComponent},
    {path: 'myApplications', component: MyApplicationsComponent},
    {path: 'sendingApplication/:id', component: SendindApllicationComponent},
    {path: 'contact', component: ContactComponent},
  ]},
  {path: 'adminHome', component: AdminHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
