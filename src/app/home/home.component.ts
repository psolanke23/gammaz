import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[HttpClient]
})
export class HomeComponent {
  httpClientModule =inject(HttpClientModule);
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  constructor() {
    this.housingService.getAllHousingLocation().subscribe(housingList => {
      this.housingLocationList = housingList;
    });
  }
}
