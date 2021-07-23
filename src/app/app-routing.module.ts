import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSocietyComponent } from './create-society/create-society.component';
import { HomeComponent } from './home/home.component';
import { SocietyComponent } from './society/society.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'societe', component: SocietyComponent },
  { path: 'CreateSociete', component: CreateSocietyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
