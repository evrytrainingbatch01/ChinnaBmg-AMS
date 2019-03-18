import { Component, OnInit } from '@angular/core';
import { TrustedStyleString } from '@angular/core/src/sanitization/bypass';
import { NgForm } from '@angular/forms';
import {Department} from '../model/department.model';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.scss']
})
export class AddempComponent implements OnInit {
  
  departments:Department[]=[
    {id:1,name:'IT'},
    {id:1,name:'HR'},
    {id:1,name:'ADMIN'},
    {id:1,name:'DEVELOPER'}
  ]
   
  constructor()
   { 
  
   }

  ngOnInit() {
  }
  user:string;
 function(event) {
   
   alert("user succussfully registerd");
 }
 saveEmployee(empForm: NgForm):void{
    console.log(empForm.value);
 }
 
}
