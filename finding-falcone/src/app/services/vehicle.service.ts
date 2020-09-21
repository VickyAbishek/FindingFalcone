import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Vehicle } from '../models/vehicle.model';
import { map } from 'rxjs/operators';


@Injectable()
export class VehicleService {
  constructor (
    private apiService: ApiService
  ) {}

  getAllVehicles(): Observable<Vehicle[]> {
    return this.apiService.get(`/vehicles`)
      .pipe(map(data => data ));
  } 
}
