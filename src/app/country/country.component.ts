import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { CountriesService } from '../services/countries.service';
import { Country, Currency, Language } from '../types/country';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  faArrowLeftLong= faArrowLeftLong;
  country$!: Observable<Country>;
  constructor(private act: ActivatedRoute,
    private restService: CountriesService){

  }
  ngOnInit(): void {
    const name = this.act.snapshot.paramMap.get("name");
    this.country$ = this.restService.getOneCountry(name!);
  }
  getCurrencies(currencies: Currency[]){
    return currencies.map(c=>c.name).join(', ');
  }
  getLanguages(languages: Language[]){
    return languages.map(l=>l.name).join(', ');
  }
}
