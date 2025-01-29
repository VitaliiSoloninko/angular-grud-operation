import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  imports: [NgFor, RouterLink],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
})
export class FoodsComponent implements OnInit {
  constructor(private foodService: FoodService) {}
  foods: Food[] = [];

  ngOnInit(): void {
    this.foodService.getAll().subscribe((data) => {
      this.foods = data;
    });
  }

  removeFood(id: number) {
    this.foodService.remove(id).subscribe({
      next: (val) => {
        this.foods = this.foods.filter((_) => _.id != id);
      },
    });
  }
}
