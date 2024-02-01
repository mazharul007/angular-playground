import { Component } from '@angular/core';
import { AngularFundamentals } from 'src/interfaces/angular-fundamentals';
import { HousingService } from 'src/services/housing.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  data: AngularFundamentals[] = [];

  constructor(private housingService: HousingService) {
    this.data = this.housingService.getAllHousingLocations();
  }


}
