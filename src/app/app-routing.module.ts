import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CreateSocietyComponent } from './create-society/create-society.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/authGuard.service';
import { SinglSocieteComponent } from './singl-societe/singl-societe.component';
import { SocieteViewComponent } from './societe-view/societe-view.component';
import { SocietyDetailsComponent } from './society-details/society-details.component';
import { SocietyComponent } from './society/society.component';

const routes: Routes = [


  { path: 'societeview', canActivate:[AuthGuard],component: SocieteViewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'societe',canActivate:[AuthGuard], component: SocietyComponent },
  { path: 'CreateSociete',canActivate:[AuthGuard], component: CreateSocietyComponent },
  { path: 'SocieteDetails/:id',canActivate:[AuthGuard], component: SocietyDetailsComponent },
  { path: 'societeview/:id',canActivate:[AuthGuard], component: SinglSocieteComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo :'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
