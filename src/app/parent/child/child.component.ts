import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() childEmitter = new EventEmitter<string>();

  childClick() {
    this.childEmitter.emit('Текст из дочернего компонента');
  }
}

