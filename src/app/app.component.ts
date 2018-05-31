import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstPickShow = false;
  secondPickShow = false;

  showFirstPick() {
    this.secondPickShow = false;
    this.firstPickShow = true;
  }

  showSecondPick() {
    this.firstPickShow = false;
    this.secondPickShow = true;
  }

  showAllPick() {
    this.firstPickShow = true;
    this.secondPickShow = true;
  }
}
