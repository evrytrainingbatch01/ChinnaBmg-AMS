import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
    
  }
 employeetimings='';
  savetime(event)
  {
    this.employeetimings=event.target.value;
    console.log(event.target.value);
    alert("Employee Entry time succuessfull");
  }

}
