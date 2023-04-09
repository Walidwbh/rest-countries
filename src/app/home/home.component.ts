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
  countries$!: Observable<Country[]>;
  scrollSize: number = 16
  countriesArray!: any[];
  constructor(private countrieService: CountriesService){
  }
  ngOnInit(): void {
    this.getCountries(0);
    this.countries$.subscribe(data =>this.countriesArray = data);
  }
  // get new 16 countries on scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(){
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop ;
    let clientHeight = document.documentElement.clientHeight;
    let scrollPosition = scrollHeight - (scrollTop + clientHeight);
    if(scrollPosition == 0 ) {
      let oldScrollSize = this.scrollSize;
      this.scrollSize += 16;
      this.getCountries(oldScrollSize);
      this.countries$.subscribe(data =>this.countriesArray.push(...data));
    }
  }
  getCountries(l:number){
    this.countries$ = this.countrieService.getAllCountries().pipe(map(x => x.slice(l,this.scrollSize)));
  }
}
