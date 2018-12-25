import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerComponent } from './home/customer/customer.component';
import { ServiceRequestComponent } from './home/service-request/service-request.component';
import { ReportsComponent } from './home/reports/reports.component';
import { LocationComponent } from './home/customer/location/location.component';
import { EquipmentComponent } from './home/customer/equipment/equipment.component';
import { RaiseTicketComponent } from './home/raise-ticket/raise-ticket.component';
import { ReportComponent } from './home/report/report.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: [
      { path: 'customers', component: CustomerComponent },
      { path: 'customers/locations/:lid', component: LocationComponent },
      { path: 'customers/locations/:lid/equipments/:eid', component: EquipmentComponent },
      { path: 'service-requests', component: ServiceRequestComponent },
    { path: 'reports', component: ReportComponent },
      { path: 'raise-ticket', component: RaiseTicketComponent },
    ]
  },
  { path: 'logout', component: LogoutComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Page' },
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: FourOFourComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FourOFourComponent,
    LogoutComponent,
    CustomerComponent,
    ServiceRequestComponent,
    ReportsComponent,
    LocationComponent,
    EquipmentComponent,
    RaiseTicketComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
