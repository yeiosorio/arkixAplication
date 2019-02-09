import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {

  URL_API: string;

  constructor(public http: HttpClient) {
    this.URL_API = 'http://dummy.restapiexample.com/api/v1/';
   }

  // Consume todos los empeados de la api
   public getAllEmployee() {

      return Observable.create(observer => {
        this.http.get(this.URL_API + `employees`).subscribe(
            data => {
              observer.next(data);
              observer.complete();
            },
            error => {
              observer.next(error);
              observer.complete();
            }
          );
      });
   }

   public deleteEmployee(uid) {

      return Observable.create(observer => {
        this.http.delete(this.URL_API + `delete/${uid}`).subscribe(
            data => {
              observer.next(data);
              observer.complete();
            },
            error => {
              observer.next(error);
              observer.complete();
            }
          );
      });
   }


}
