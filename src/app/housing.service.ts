import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, filter, find, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // goo.gle/homes-app-listings

  url = "assets/data/housing.json"
  constructor(public http: HttpClient) { }

  getAllHousingLocation(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<any> {
    return this.http.get<any>(this.url).pipe(map((data: any[]) => data.find(hl => hl.id == id)));
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

}
