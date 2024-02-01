import { Component } from '@angular/core';
import { AngularFundamentals } from 'src/interfaces/angular-fundamentals';
import { HousingService } from 'src/services/housing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-101';

  data: AngularFundamentals[] = [];

}
