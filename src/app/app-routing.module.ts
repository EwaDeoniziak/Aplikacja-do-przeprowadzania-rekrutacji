import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { UserPanelComponent } from './user/components/user-panel/user-panel.component';
import { JobListComponent } from './home/components/job-list/job-list.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { AuthComponent } from './home/components/auth/auth.component';
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component';
import { UserMainPageComponent } from './user/components/user-main-page/user-main-page.component';
import { MyApplicationsComponent } from './user/components/my-applications/my-applications.component';
import { SendindApllicationComponent } from './user/components/sendind-apllication/sendind-apllication.component';
import { AdminMainPageComponent } from './admin/components/admin-main-page/admin-main-page.component';
import { YourOffersComponent } from './admin/components/your-offers/your-offers.component';
import { AddOfferComponent } from './admin/components/add-offer/add-offer.component';
import { ApplicationsComponent } from './admin/components/applications/applications.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: '', redirectTo: 'jobList', pathMatch: 'full'},
    {path: 'jobList', component: JobListComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'auth', component: AuthComponent}
  ]},
  {path: 'userPanel', component: UserPanelComponent, children: [
    {path: '', redirectTo: 'userMainPage', pathMatch: 'full'},
    {path: 'userMainPage', component: UserMainPageComponent},
    {path: 'jobList', component: JobListComponent},
    {path: 'myApplications', component: MyApplicationsComponent},
    {path: 'sendingApplication/:id', component: SendindApllicationComponent},
    {path: 'contact', component: ContactComponent},
  ]},
  {path: 'adminPanel', component: AdminPanelComponent, children: [
    {path: '', redirectTo: 'adminMainPage', pathMatch: 'full'},
    {path: 'adminMainPage', component: AdminMainPageComponent},
    {path: 'yourOffers', component: YourOffersComponent},
    {path: 'addOffer', component: AddOfferComponent},
    {path: 'applications', component: ApplicationsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
