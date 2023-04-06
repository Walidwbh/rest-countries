import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Country } from '../types/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private api = "https://restcountries.com/v2/name/";
  private apiAll = "https://restcountries.com/v2/all";
  constructor(private httpClient: HttpClient) { }
  // method that returns one country
  getOneCountry(name:string){
    let headers = new HttpHeaders();
    return this.httpClient.get<Country[]>(this.api+name, {headers: headers}).pipe(map(([res])=>res))
  }
  getAllCountries(){
    let headers = new HttpHeaders();
    return this.httpClient.get<Country[]>(this.apiAll, {headers: headers})
  }
}
