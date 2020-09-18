import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet.model';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planets : Planet[];

  constructor(
    private planetService: PlanetService,
  ) { }

  ngOnInit(): void {
    console.log('test');
    this.getPlanets();
  }

  getPlanets() {
    this.planetService.getAllPlanets()
      .subscribe(planets => { this.planets = planets; console.log(this.planets); });
  }

}
