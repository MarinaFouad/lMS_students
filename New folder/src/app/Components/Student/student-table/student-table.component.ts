import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../../service/student.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from 'src/app/Interface/istudent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit , OnDestroy {
 
  mySubscription: Subscription | undefined;
  constructor(private StudentService : StudentService , private myRouter : Router , private actRoute : ActivatedRoute ){}
  students: IStudent[] =[];
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {

    this.mySubscription = this.StudentService.getAll().subscribe({
      next: (data) => {
        this.students = data;
      },
    });
  }
  delete(id: number) {
    this.StudentService.Delete(id).subscribe(() => {
      this.getData();
    });
  }

}
