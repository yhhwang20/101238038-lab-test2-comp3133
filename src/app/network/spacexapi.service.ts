import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  getMission(){
    return this.http.get<mission[]>('https://api.spacexdata.com/v3/launches');
  }
}
