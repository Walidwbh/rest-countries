import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private restUrl = "https://restcountries.com/v3.1/name/"
  constructor(private httpClient: HttpClient) { }
  // method that returns one country
  getOneCountry(name:string):Observable<any>{
    let headers = new HttpHeaders();
    return this.httpClient.get<any>(this.restUrl+name, {headers: headers}).pipe(retry(3), catchError(this.httpErrorHandler))
  }
  private httpErrorHandler (error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      console.error(`A client side error occured. the error message is ${error.message}`);
    }else {
      console.error(`An error happened in the server. the http status code is ${error.status} and the error returned is ${error.message}`)
    }
    return throwError(()=>{
      new Error("Error occured please try again");
    })
  }
}
