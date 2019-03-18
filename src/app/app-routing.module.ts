import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddempComponent } from './addemp/addemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { TimesheetComponent} from './timesheet/timesheet.component';
import { UpdateempComponent } from './updateemp/updateemp.component';


const routes: Routes = [ 
  {path:"department",component:DepartmentListComponent},
  {path:"employee",component:EmployeeListComponent},
  {path:"add", component:AddempComponent},
  {path:"listemp",component:ListempComponent},
  {path:"timesheet",component:TimesheetComponent},
  {path:"update",component:UpdateempComponent},
  {path:'',redirectTo:'/listemp',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent,
  AddempComponent,ListempComponent,TimesheetComponent,UpdateempComponent
]