import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  //Dependecy injection Lessons Please check the employee service for the values
  public employees = [];
  // this._employeeService.getEmployees();
    // {"id": 1, "name": "Andrew", "age": 30},
    // {"id": 2, "name": "Brandon", "age": 25},
    // {"id": 3, "name": "Christina", "age": 26},
    // {"id": 4, "name": "Elena", "age": 28}
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() :void{
     this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }


}
