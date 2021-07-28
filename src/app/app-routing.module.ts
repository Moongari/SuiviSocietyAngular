import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CreateSocietyComponent } from './create-society/create-society.component';
import { HomeComponent } from './home/home.component';
import { SocieteViewComponent } from './societe-view/societe-view.component';
import { SocietyDetailsComponent } from './society-details/society-details.component';
import { SocietyComponent } from './society/society.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'societeview', component: SocieteViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'societe', component: SocietyComponent },
  { path: 'CreateSociete', component: CreateSocietyComponent },
  { path: 'SocieteDetails/:id', component: SocietyDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
