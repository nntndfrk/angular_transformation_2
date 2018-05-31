import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentText = 'Текст по умолчанию';

  getChildText(childText) {
    this.parentText = childText;
  }

  setDefaultText() {
    this.parentText = 'Текст по умолчанию';
  }

}
