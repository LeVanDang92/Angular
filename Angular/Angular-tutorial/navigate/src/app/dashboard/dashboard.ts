import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

constructor( private route: Router) {
  
}

  gotoProduct(){
    this.route.navigate(['product', '1']);
  }

  gotoLogin(){
    this.route.navigateByUrl('/login');
  }
}
