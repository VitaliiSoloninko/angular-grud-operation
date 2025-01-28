import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-update',
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  formData: Food = {
    id: 0,
    name: '',
    price: 4,
    description: '',
  };

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.foodService.edit(id).subscribe((val) => {
      this.formData = val;
    });
  }

  update() {
    this.foodService.update(this.formData).subscribe({
      next: (val) => {
        this.router.navigate(['/foods']);
      },
      error: (er) => {
        console.log(er);
      },
    });
  }
}
