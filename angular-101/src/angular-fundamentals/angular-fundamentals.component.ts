import { Component } from '@angular/core';
import { AngularFundamentals } from 'src/interfaces/angular-fundamentals';

@Component({
  selector: 'angular-fundamentals',
  templateUrl: './angular-fundamentals.component.html',
  styleUrls: ['./angular-fundamentals.component.css']
})
export class AngularFundamentalsComponent {

  readonly baseUrl = 'https://picsum.photos/200/300';

  data: AngularFundamentals = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    isWifi: true,
    isLaundry: false,
  };

  // business logic 

}
