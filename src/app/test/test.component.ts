import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-test',
  template: `
  <!-- Component Interaction Input and Button -->
    <h2>{{"Hello" + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


//Component Interaction please import Input and Output also the EventEmitter from @angular/core
// @Input() public parentData = "";
@Input('parentData') public name = "";
@Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
  }
}
