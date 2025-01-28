import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  constructor(private foodService: FoodService, private router: Router) {}
  formData: Food = {
    id: 0,
    name: '',
    price: 4,
    description: '',
  };

  create() {
    this.foodService.create(this.formData).subscribe({
      next: (val) => {
        this.router.navigate(['/foods']);
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
