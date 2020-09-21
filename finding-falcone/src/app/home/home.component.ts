import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet.model';
import { Vehicle } from '../models/vehicle.model';
import { PlanetService } from '../services/planet.service';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  planets : Planet[];
  vehicles: Vehicle[];

  constructor(
    private planetService: PlanetService,
    private vehicleService: VehicleService,
  ) { }

  ngOnInit(): void {
    console.log('test');
    this.getPlanets();
    this.getVechicles();
  }

  getPlanets() {
    this.planetService.getAllPlanets()
      .subscribe(planets => { this.planets = planets; console.log(this.planets); });
  }

  getVechicles() { 
    this.vehicleService.getAllVehicles()
      .subscribe(vehicles => { this.vehicles = vehicles; console.log(this.vehicles); });
  }

}
