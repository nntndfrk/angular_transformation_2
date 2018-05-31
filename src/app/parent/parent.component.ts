import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentText = 'Текст по умолчанию';

  childClick(childText) {
    this.parentText = childText;
  }

}
