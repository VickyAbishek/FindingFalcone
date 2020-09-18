import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Planet } from '../models/planet.model';
import { map } from 'rxjs/operators';


@Injectable()
export class PlanetService {
  constructor (
    private apiService: ApiService
  ) {}

  getAllPlanets(): Observable<Planet[]> {
    return this.apiService.get(`/planets`)
      .pipe(map(data => data ));
  }

}
