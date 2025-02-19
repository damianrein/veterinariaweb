import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PetTableComponent } from './components/pet-table/pet-table.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'info',component:PetTableComponent},
  {path:'/pets/:id',component:PetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
