import { Component, Input, OnInit } from '@angular/core';
import { CovidTotal } from 'src/app/services/covidstats.service';

@Component({
  selector: 'app-covidmetric',
  templateUrl: './covidmetric.component.html',
  styleUrls: ['./covidmetric.component.css']
})
export class CovidmetricComponent implements OnInit {

  // @Input() totalNLfromParent: any[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
