import { Component, HostListener, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../types/country';
import { Observable, delay, map, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countriesArray!: any[];
  searchFilter!: string;
  constructor(private countrieService: CountriesService){
  }
  ngOnInit(): void {
    this.countrieService.getAllCountries().subscribe(data =>this.countriesArray = data);
  }
  get countries() {
    return this.countriesArray
    ? this.countriesArray.filter((country)=>
      this.searchFilter ?
      country.name.toLowerCase().includes(this.searchFilter.toLowerCase())
      : country
    )
    : this.countriesArray;
  }
}
