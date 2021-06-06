import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {

  // Property declarations of Property Binding
  public myId = "testId";
  public isDisabled = false;


   // Style Binding property
  public name = "Codevolution";
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public highlightColor= "orange";



  //Class Binding
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  //Style Binding
  public titleStyles = {
    color: "blue",
    fontSize: "50px",
    fontStyle: "italic"
  }

  // Method for event Binding
  logMessage(myInput : {value: string}){
    console.log(myInput.value);
    alert(myInput.value);
  }

  // For Event Binding button function method click
  public greeting = "";
  onClick(){
    console.log("event");
    this.greeting = "Welcome to Codevolution";
  }

  sayHello(firstName:{value: string}, lastName:{value:string}){
    alert('Hello'+firstName.value+' '+lastName.value)
  }

  // Two way binding
  public newName = "";

  // Ng if Directive
  public displayName = true;

  // Ngswitch Directive

  public color = "violet";

  // Ng For Directive
  public colors = ["red", "blue", "green", "yellow"];


  constructor() { }

  ngOnInit(): void {
  }


}
