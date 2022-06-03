import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.interface';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  cars: Car[] = []
  carsList: any[] = [this.cars[0]]; 
  loading: boolean = true; 

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService
    .getAllCars()
    .subscribe((cars) => {
      for(let key in cars) {
        console.log(cars[key])
        for(let i = 0; i<cars[key].length; i++){
          this.cars.push(cars[key][i])
        }
      }
      this.loading=false;
    })
  }
  

}
