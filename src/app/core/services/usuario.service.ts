import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //private apiLogin: string = 'http://localhost:8000/index.php/api/v1/login';
  private apiLogin: string = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  /* Get Api Data from mock service */
  getApiLogin( user: any ): Observable<any> {
    return this.http.post(this.apiLogin, user);
  }

  /* Handle request error */
  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server error');
  }
}
