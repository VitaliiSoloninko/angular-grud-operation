import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foods',
  imports: [NgFor],
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
}
