import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <h2>Welcome {{name}}</h2>
    <!-- Class Binding -->
    <h2 class="text-success">Class Binding</h2>
    <h2 [class]="successClass">Class Binding</h2>
    <h2 [class]="successClass" class="text-special">Class Binding</h2>
    <h2 [class.text-danger] = "hasError">Class Binding</h2>
    <h2 [ngClass] = "messageClasses">Class Binding</h2>

    <!-- Sstyle Binding -->
    <h2 [style.color]="'orange'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red': 'green'">Style Binding</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngClass] = "contentStyle" [ngStyle]="titleStyles" >Style Binding 2</h2>

    <!-- Event Binding -->
    <button (click) = "onClick()">Greet</button>
    <button (click) = "greeting='Welcome Vishwas'">Greet</button>
    {{greeting}}

    <!-- Template Reference Variable -->

    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>

    <p>
    <label for="firstName">First Name</label>
    <input (keyup)="0" type="text" #firstName id="firstName">
    </p>

    <p>
    <label for="lastName">Last Name</label>
    <input (keyup)="0" type="text" #lastName id="lastName">
    </p>

    <b>Welcome {{firstName.value}} {{lastName.value}} </b>
    <p>
    <button (click)="sayHello(firstName, lastName)"> Say Hello</button>
    </p>


    <!-- Two way binding -->
    <p>Type the text</p>
    <input [(ngModel)]="newName" type="text">
    {{newName}}

    <!-- Structural Directives -->
    <!-- NG if Directives -->
    <h2 *ngIf="false">Code evolution</h2>

    <h2 *ngIf="displayName; else elseBlock" >Code evolution</h2>
    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
    <!--  -->
    <div *ngIf="displayName; then thenBlock; else elseBlock2"></div>
    <ng-template #thenBlock>
      <h1>Code EV olution</h1>
    </ng-template>
    <ng-template #elseBlock2>
      <h1>Hidden</h1>
    </ng-template>

    <!-- NG switch Directive -->
    <div [ngSwitch]="color">
      <div *ngSwitchCase = "'red'">You picked red color</div>
      <div *ngSwitchCase = "'blue'">You picked the blue color</div>
      <div *ngSwitchCase = "'green'">You picked the green color</div>
      <div *ngSwitchDefault>Pick Again</div>
    </div>
    <!-- Ng For Directive -->

    <div *ngFor="let color of colors; odd as i">
      <h2>{{i}} {{color}}</h2>
    </div>

  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
    .text-warning{
      color: violet;
    }

  `]
})



export class ContentComponent implements OnInit {



  public name = "Codevolution";
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public highlightColor= "orange";


  // For Class Binding
  // Object
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  // For Style Binding Object
  public titleStyles = {
    color: "blue",
    fontSize: "50px",
    'font-style': "italic"
  }
  public contentStyle = {
    "text-warning": this.isSpecial,
    "text-special": this.isSpecial
  }


  // For Event Binding
  public greeting = "";


  constructor() { }

  ngOnInit(): void {
  }
  // Event Binding button function on click

  onClick(){
    console.log("event");
    this.greeting = "Welcome to Codevolution";
  }

  // Template Reference Variable
  logMessage(newt: {value: string}){
    console.log(newt.value);
  }
  sayHello(firstName: { value: string; }, lastName: { value: string; }) {
    alert('Hello '+firstName.value+' '+ lastName.value)
  }

  //Two way binding
  public newName = "";

  //NgIf Directive
  displayName = true;

  //Ngswitch Directive

  public color = "violet";

  // Ng For Directive
  public colors = ["red", "blue", "green", "yellow"];

}
