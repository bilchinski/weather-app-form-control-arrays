import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as data from '../../assets/city.list.json';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cities: any = (data as any).default;

  weatherForm = new FormGroup({
    city: new FormControl('', Validators.required),
    units: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
