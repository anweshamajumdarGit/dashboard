import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

constructor(private router: Router) {}

navigate(event: any){

  const value = event.target.value;

  if(value){
    this.router.navigate(['/dashboard', value]);
  }

}

}