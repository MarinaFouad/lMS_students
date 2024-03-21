import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import   { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentTableComponent } from './Components/Student/student-table/student-table.component';
import { AddStudentComponent } from './Components/Student/add-student/add-student.component';
import { EditStudentComponent } from './Components/Student/edit-student/edit-student.component';
import { AddEventComponent } from './Components/Events/add-event/add-event.component';
import { EditEventComponent } from './Components/Events/edit-event/edit-event.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    AddStudentComponent,
    EditStudentComponent,
    AddEventComponent,
    CalenderComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
