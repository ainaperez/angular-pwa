import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.interface';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>('https://myfakeapi.com/api/cars/');
  }

  getCarById(id: string | null): Observable<Car>{
    return this.http.get<Car>(`https://myfakeapi.com/api/cars/${id}`);
  }
}
