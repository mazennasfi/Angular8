import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  lat;
  lon;
  weather;
  location;
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.ws.localWeather(this.lat, this.lon).subscribe((data) => {
          console.log(data);
          this.weather = data;
        })
      })

    }
  }
  getWeatherCity(city: string) {
    this.ws.getWeatherDataByCityName(city).subscribe((data) => {
      this.weather = data;
    })

  }




}
