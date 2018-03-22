import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { Component, OnInit, HostListener } from '@angular/core';

declare const window: any;

@Component({
  selector: 'thc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  offSetTop: boolean;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.offSetTop = true;
    } else {
      this.offSetTop = false;
    }
  }
}
