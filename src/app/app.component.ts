import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNavMobileActive : boolean = false


  toggleNavMobile () {
    this.isNavMobileActive = !this.isNavMobileActive;
    console.log(this.isNavMobileActive);
  }
}


