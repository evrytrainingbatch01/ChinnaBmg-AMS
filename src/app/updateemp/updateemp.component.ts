import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.scss']
})
export class UpdateempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  updateemployee(event)
{
  console.log(event.target.value);
  alert("EmployeeDetails updated successfull");
}
}
