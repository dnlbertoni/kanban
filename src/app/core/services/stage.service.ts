import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ListSchema } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  //api with one task
  //private apiRoot: string = 'https://run.mocky.io/v3/26045374-863c-469d-85c4-51ea1135ce8a';
  //api without any task
  //private apiRoot: string = 'https://run.mocky.io/v3/7841d1af-e8d5-446a-bac5-3506fdd05659';
  // api with many task
  //private apiRoot: string = 'https://run.mocky.io/v3/0933ddef-c9bf-4f26-8ddf-77990fb490cb';

  private apiRoot: string = 'http://localhost:8000/index.php/api/v1/tickets';

  constructor(private http: HttpClient) { }

  /* Get Api Data from mock service */
  getApi(): Observable<ListSchema[]> {
    return this.http.get<ListSchema[]>(this.apiRoot)
      .pipe(map(data => data), catchError(this.handleError));
  }

  /* Handle request error */
  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server error');
  }
}
