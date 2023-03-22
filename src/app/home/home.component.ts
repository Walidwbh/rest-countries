import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  regions = [
    {value: 'africa', viewValue: 'Africa'},
    {value: 'america', viewValue: 'America'},
    {value: 'asia', viewValue: 'Asia'},
    {value: 'europe', viewValue: 'Europe'},
    {value: 'oceania', viewValue: 'Oceania'},
  ];
}
