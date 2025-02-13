import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../Interface/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL : string ="http://localhost:3002/student";

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.baseURL);
  }

  getById(id: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>(`${this.baseURL}/${id}`);
  }

  Add(student: IStudent) {
    return this.httpClient.post(this.baseURL, student);
  }

  Edit(id: number, student: IStudent) {
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  Delete(id: number) {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  testObservable(): Observable<string> {
    console.log('test function called');

    let myObservable = new Observable<string>((observer) => {

      console.log('observable called');
      observer.next('first data');

      if (false) {
        observer.error('This is an error!');
      }
      observer.next('second data');
      observer.complete();
      return {
        unsubscribe() {
          console.log('End subscription');
        },
      };
    });

    return myObservable;
  }
}
