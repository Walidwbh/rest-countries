import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../types/country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries$!: Observable<Country[]>;
  regions = [
    {value: 'africa', viewValue: 'Africa'},
    {value: 'america', viewValue: 'America'},
    {value: 'asia', viewValue: 'Asia'},
    {value: 'europe', viewValue: 'Europe'},
    {value: 'oceania', viewValue: 'Oceania'},
  ];
  constructor(private countrieService: CountriesService){
  }
  ngOnInit(): void {
    this.countries$ = this.countrieService.getAllCountries();
    // this.countries$.subscribe(res=>console.log(res));
  }
}
