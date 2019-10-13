import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/weather";
  apikey = "d5166e82ea82cd72712364878308125c";

  constructor(private http: HttpClient) { }

  localWeather(lat: string, lon: string) {
    let params = new HttpParams().set('lat', lat)
      .set('lon', lon)
      .set('units', "imperial")
      .set('appid', this.apikey)
    return this.http.get(this.url, { params })

  }
  getWeatherDataByCityName(city: string) {
    let params = new HttpParams().set('q', city)
      .set('units', "imperial")
      .set('appid', this.apikey)
    return this.http.get(this.url, { params })

  }
}
