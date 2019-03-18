import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
@Component({
  selector: 'app-user-detials',
  templateUrl: './user-detials.component.html',
  styleUrls: ['./user-detials.component.scss']
})
export class UserDetialsComponent implements OnInit {

  public employees = [];
  public errorMsg;
  
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);
        
  }

}
