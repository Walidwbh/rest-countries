import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Country } from '../types/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private Url = "https://restcountries.com/v2/";
  constructor(private httpClient: HttpClient) { }
  getOneCountry(name:string){
    let headers = new HttpHeaders();
    return this.httpClient.get<Country[]>(`${this.Url}/name/${name}`, {headers: headers}).pipe(map(([res])=>res))
  }
  getAllCountries(){
    let headers = new HttpHeaders();
    return this.httpClient.get<Country[]>(`${this.Url}/all`, {headers: headers})
  }
}
