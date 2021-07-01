import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./components/views/home/home.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { PessoaCreateComponent } from './components/views/pesssoa/pessoa-create/pessoa-create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PessoaReadComponent,
    PessoaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
