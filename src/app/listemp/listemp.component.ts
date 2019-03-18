import { Component, OnInit, Input } from '@angular/core';
import {Employeelist} from '../model/employeelist';
import { timestamp } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/Employee';


@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.scss']
})
export class ListempComponent implements OnInit {

  employeelist:Employeelist[]=[
  
    {
      id:1,
    name:'babu',
    email:'bau@gmail.com',
    salary:9000,
    mobile:12345678,
    department:'IT',
    entrydate:new Date('24/06/2017'),
    workinghours:'9-hours',
    photopath:'assert/images/babu.png'
    },
    {
      id:2,
    name:'shilpa',
    email:'shilpa@gmail.com',
    salary:6000,
    mobile:99999464,
    department:'HR',
    entrydate:new Date('12/3/2019'),
    workinghours:'9-hours',
    photopath:'assert/images/shilpa.png'
    },
    {
      id:3,
    name:'raju',
    email:'raju@gmail.com',
    salary:50000,
    mobile:7777567,
    department:'Admin',
    entrydate:new Date('12/2/2018'),
    workinghours:'10-hours',
    photopath:'assert/images/raju.png'
    }
  ];
  employee=[];
 titleemp:"EmployeeDetails";

  constructor(private _employeeService:EmployeeService) { }
  

  ngOnInit() {
  this.employee=this.getEmployee();
  }
 
getEmployee(){
  return[
    {'fullname':'chinna','email':'ucher999@gmail.com','salary':'3000','mobile':'8787879'},
    {'fullname':'deepak','email':'deepak@gmail.com','salary':'9000','mobile':'22343'},
    {'fullname':'raj','email':'raj@gmail.com','salary':'7000','mobile':'3454353'},
    {'fullname':'srinivas','email':'srinivas@gmail.com','salary':'8000','mobile':'123323'},
  ];
}

editEmp(event){
  alert("here edite employee details");
}
deleteEmp(){
  // this._employeeService.deleteEmp(this.employeelist.id);
  alert("deleted record");
}
}
