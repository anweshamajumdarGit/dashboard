import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ApisComponent } from './dashboard/apis/apis.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

{ path: 'home', component: HomeComponent },

{
  path: 'dashboard',
  component: DashboardComponent,
  children: [

    { path: 'services', component: ServicesComponent },

    { path: 'apis', component: ApisComponent }

  ]
},

{ path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ServicesComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }