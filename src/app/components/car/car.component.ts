import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Car } from 'src/app/models/car.interface';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car: Car
  carObject: any[];
  show: boolean = false;

  toggleShow() {

    this.show = !this.show;
    console.log(this.show)
  }
  constructor(
    private carsService: CarsService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
  ) { }
  

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('Identifier -->', identifier);
    this.carsService.getCarById(identifier).subscribe((car) => {
      if(!car){
        return this.router.navigateByUrl('/')
      }
      
      this.carObject = [...[car]];
      console.log('Car -->' , this.carObject[0].Car, typeof this.car); 
      return
    })
  }

}
