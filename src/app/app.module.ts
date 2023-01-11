import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AreasComponent } from './components/areas/areas.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MainareasComponent } from './components/mainareas/mainareas.component';
import { MainrolesComponent } from './components/mainroles/mainroles.component';
import { FormrolesComponent } from './components/mainroles/formroles/formroles.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AreasComponent,
    HeaderComponent,
    MainComponent,
    MainareasComponent,
    MainrolesComponent,
    FormrolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
