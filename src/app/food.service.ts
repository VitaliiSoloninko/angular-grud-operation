import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  baseApiUrl = 'http://localhost:3000/foods';

  getAll() {
    return this.httpClient.get<Food[]>(this.baseApiUrl);
  }

  create(val: Food) {
    return this.httpClient.post(this.baseApiUrl, val);
  }

  edit(id: number) {
    return this.httpClient.get<Food>(`http://localhost:3000/foods/${id}`);
  }

  update(val: Food) {
    return this.httpClient.put<Food>(
      `http://localhost:3000/foods/${val.id}`,
      val
    );
  }

  remove(id: number) {
    return this.httpClient.delete<Food>(`http://localhost:3000/foods/${id}`);
  }
}
