
import {throwError as observableThrowError, Observable} from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Employeelist } from './model/employeelist';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeelist: Employeelist[]=[
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

  ]

  
private  url:string='/assets/data/employees.json';
  constructor(private http:HttpClient) {
    
   }
   getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
  
  deleteEmp(id:number)
{
  const i=this.employeelist.findIndex(e => e.id===id)
  if(i!==-1){
    this.employeelist.splice(i,1)
  }

  alert("deleted record ");
}
}
