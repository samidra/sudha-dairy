import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionComponent } from './collection/collection.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { TotalSocietyComponent } from './total-society/total-society.component';
import { TotalBmcComponent } from './total-bmc/total-bmc.component';
import { TotalUnitsComponent } from './total-units/total-units.component';






const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'collection-detail',
        component: CollectionComponent,
      },
      {
        path: 'user-detail',
        component: UserComponent,
      },
      {
        path: 'role-management',
        component: RoleComponent,
      },
      {
        path: 'report-detail',
        component: ReportComponent,
      },
      {
        path: 'settings',
        component: SettingComponent,
      },
      {
        path: 'employee-management',
        component: EmployeeComponent,
      },
      {
        path: 'employee-attandence',
        component: AttendenceComponent,
      },
      {
        path: 'total-society',
        component: TotalSocietyComponent,
      },
      {
        path: 'total-bmc',
        component: TotalBmcComponent,
      },
      {
        path: 'total-unit',
        component: TotalUnitsComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const ArrayOfComponents = [AdminComponent,]
