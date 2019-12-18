import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/components/home/home.component';
import { UserPanelComponent } from './user/components/user-panel/user-panel.component';
import { JobListComponent } from './home/components/job-list/job-list.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { AuthComponent } from './home/components/auth/auth.component';
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component';

import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { JobDetailsComponent } from './home/components/job-details/job-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatSortModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './shared/pipes/search.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminMainPageComponent } from './admin/components/admin-main-page/admin-main-page.component';
import { UserMainPageComponent } from './user/components/user-main-page/user-main-page.component';
import { MyApplicationsComponent } from './user/components/my-applications/my-applications.component';
import { SendindApllicationComponent } from './user/components/sendind-apllication/sendind-apllication.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { YourOffersComponent } from './admin/components/your-offers/your-offers.component';
import { AddOfferComponent } from './admin/components/add-offer/add-offer.component';
import { ApplicationsComponent } from './admin/components/applications/applications.component';
import { BoldPipe } from './shared/pipes/bold.pipe';
import {MatTableModule} from '@angular/material/table';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPanelComponent,
    JobListComponent,
    ContactComponent,
    AuthComponent,
    AdminPanelComponent,
    JobDetailsComponent,
    SearchPipe,
    AdminMainPageComponent,
    UserMainPageComponent,
    MyApplicationsComponent,
    SendindApllicationComponent,
    YourOffersComponent,
    AddOfferComponent,
    ApplicationsComponent,
    BoldPipe,
    OrderByPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    //material modules
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  providers: [OrderByPipe, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
