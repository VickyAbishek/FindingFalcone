import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
// import { Planet } from '../models/planet.model';
import { map } from 'rxjs/operators';


@Injectable()
export class TokenService {
  constructor (
    private apiService: ApiService
  ) {}

  getAllPlanets(): Observable<String> {
    return this.apiService.get(`/token`)
      .pipe(map(data => data ));
  }

}
