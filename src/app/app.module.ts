import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocietyComponent } from './society/society.component';
import { MatTableModule } from '@angular/material/table';
import { CreateSocietyComponent } from './create-society/create-society.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocietyDetailsComponent } from './society-details/society-details.component';
import { AuthService } from './services/auth.service';
import { TraitementSocieteService } from './services/traitementSociete.service';
import { SocieteViewComponent } from './societe-view/societe-view.component';
import { AuthComponent } from './auth/auth.component';
import { SinglSocieteComponent } from './singl-societe/singl-societe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/authGuard.service';
import { Observable } from 'rxjs';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocietyComponent,
    CreateSocietyComponent,
    SocietyDetailsComponent,
    SocieteViewComponent,
    AuthComponent,
    SinglSocieteComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,TraitementSocieteService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule  {



}
