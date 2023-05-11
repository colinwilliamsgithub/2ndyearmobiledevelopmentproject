import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
word:string="";
  constructor(private router:Router) {}

  search() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        word: this.word
      }
    };
    this.router.navigate(["result"], navigationExtras);
  }
}
