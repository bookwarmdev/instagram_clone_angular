import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient,
  ) { }

  profile_pic!: String;
  username!: String;
  setProfilePic(data: String) {
    this.profile_pic = data;
  }

  setUserName(data: String) {
    this.username = data;
  }

  getProfilePic(): any{
    return this.profile_pic;
  }

  getUserName(): String{
    return this.username;
  }

   endpoint = 'https://randomuser.me/api';
   

   private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private extractData(res: any): any {
    const body = res;
    return body || { };
  }

  getUserInfo() {
    return this.http.get(this.endpoint + '/?page=1&results=20&seed=feed');
  } 


  // getUserInfo(): Observable<any> {
  //   return this.http.get(this.endpoint + '/?page=1&results=20&seed=feed').pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   ); 
  // } 
}
