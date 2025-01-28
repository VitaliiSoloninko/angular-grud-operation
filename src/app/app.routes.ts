import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
];
