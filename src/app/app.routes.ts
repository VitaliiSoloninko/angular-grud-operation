import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FoodsComponent } from './foods/foods.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'foods', pathMatch: 'full' },
  { path: 'foods', component: FoodsComponent },
  { path: 'foods/create', component: CreateComponent },
  { path: 'foods/update/:id', component: UpdateComponent },
];
