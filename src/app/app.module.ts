import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/components/home/home.component';
import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { JobListComponent } from './home/components/job-list/job-list.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { AuthComponent } from './home/components/auth/auth.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';

import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { JobDetailsComponent } from './home/components/job-details/job-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserHomeComponent,
    JobListComponent,
    ContactComponent,
    AuthComponent,
    AdminHomeComponent,
    JobDetailsComponent,
    SearchPipe,
    AdminMainPageComponent,
    UserMainPageComponent,
    MyApplicationsComponent,
    SendindApllicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    //material modules
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
