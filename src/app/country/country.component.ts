import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  faArrowLeftLong= faArrowLeftLong;
  countryData?:any[];
  constructor(private router: Router,private act: ActivatedRoute,
    private restService: CountriesService){

  }
  ngOnInit(): void {
    const name = this.act.snapshot.paramMap.get("name");
    this.restService.getOneCountry(name!).subscribe(data=>{
      this.countryData = data
      console.log(this.countryData)
      console.log(this.countryData?.[0].languages)
    })
    // this.countryData = this.getCountry(name!);
  }
  getCountry(name: string){
    this.restService.getOneCountry(name).subscribe(data=>{
      this.countryData = data
    })
  }
}
