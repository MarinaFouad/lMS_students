import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from 'src/app/Interface/istudent';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit , OnDestroy {
  student: IStudent | undefined;
  id: number = 0;
 
  StudentForm: FormGroup = new FormGroup({
    name: new FormControl( '',[Validators.required , Validators.minLength(3) , Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)+$')]),
    role: new FormControl('student', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(11),Validators.maxLength(11),
    Validators.pattern('^01[0152]+[0-9]{8,}$')
    ]),
    address: new FormControl('', [Validators.required,Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
     ]),
    photo: new FormControl(null, Validators.pattern('.*\.(jpg|jpeg|png|gif)$')),
    age : new FormControl('', Validators.required),
    title: new FormControl('', [Validators.required,Validators.minLength(4)])
  });

  constructor(private studentService : StudentService , private myRoute : Router , private act : ActivatedRoute){}
  
  ngOnDestroy(): void {
    this.myGetSub?.unsubscribe();
    this.myActionSub?.unsubscribe();
  }

  myGetSub: Subscription | undefined;
  myActionSub: Subscription | undefined;

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];
 
    this.myGetSub =  this.studentService.getById(this.id).subscribe((data) => {

      this.StudentForm.controls['name'].setValue(data.name);
      this.StudentForm.controls['email'].setValue(data.email);
      this.StudentForm.controls['photo'].setValue(null);
      this.StudentForm.controls['phone'].setValue(data.phone);
      this.StudentForm.controls['age'].setValue(data.age);
      this.StudentForm.controls['address'].setValue(data.address);
      this.StudentForm.controls['title'].setValue(data.title);
      this.StudentForm.controls['role'].setValue(data.role);

  });
}

  get nameControl() {
    return this.StudentForm.controls['name'];
  }
  get ageControl() {
    return this.StudentForm.controls['age'];
  }
  get phoneControl() {
    return this.StudentForm.controls['phone'];
  }
  get addressControl() {
    return this.StudentForm.controls['address'];
  }
  get titleControl() {
    return this.StudentForm.controls['title'];
  }
  get emailControl() {
    return this.StudentForm.controls['email'];
  }
  get passwordControl() {
    return this.StudentForm.controls['password'];
  }
  get photoControl() {
    return this.StudentForm.controls['photo'];
  }
  get roleControl() {
    return this.StudentForm.controls['role'];
  }

  onSubmit(e:Event) {
    e.preventDefault();

         //will be reviewed again
         
      this.myRoute.navigate(['/student/table']);
    }
    
  
}
