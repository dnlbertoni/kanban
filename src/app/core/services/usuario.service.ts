import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //private apiLogin: string = 'http://localhost:8000/index.php/api/v1/login';
  private apiLogin: string = 'https://reqres.in/api/login';

  private apiLogout: string = 'https://reqres.in/api/login';

  constructor(private http: HttpClient, private cookie:CookieService) { }

  /* Get Api Data from mock service */
  login( user: any ): Observable<any> {
    return this.http.post(this.apiLogin, user)
                    .pipe(map(data => data), catchError(this.handleError));
  }

  logout(user: any){
    return this.http.post(this.apiLogout, user)
                    .pipe(map(data => data), catchError(this.handleError));
  }

  setToken(token:string){
    this.cookie.set("token_usuario",token);
  }

  getToken(){
    return this.cookie.get("token_usuario");
  }

  delToken(){
    this.cookie.delete("token_usuario");
  }

  /* Handle request error */
  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server error');
  }
}
