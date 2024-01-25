import { Component, Input, OnInit } from '@angular/core';
import { AngularFundamentals } from 'src/interfaces/angular-fundamentals';

@Component({
  selector: 'angular-fundamentals',
  templateUrl: './angular-fundamentals.component.html',
  styleUrls: ['./angular-fundamentals.component.css']
})
export class AngularFundamentalsComponent implements OnInit {


  @Input() housingLocation!: AngularFundamentals;


  ngOnInit() {

  }



}
