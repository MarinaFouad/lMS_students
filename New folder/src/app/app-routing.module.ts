import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './Components/Student/student-table/student-table.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { EditStudentComponent } from './Components/Student/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: 'student/table',
    component: StudentTableComponent ,
  },
  {
    path: 'student/add',
    component: AddStudentComponent
  },
  {
    path: 'student/edit/:id',
    component: EditStudentComponent
  },
  {
    path: '**',
    redirectTo: 'student/table', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
