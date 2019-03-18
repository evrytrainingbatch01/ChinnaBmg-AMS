import { Component } from '@angular/core';
import {Employee} from 'src/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMSproj';

  employees:Employee[]=[
    new Employee(1,'chinna',25,8000),
    new Employee(2,'deepak',24,8700)
  ];
  


}