import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';

import {ButtonModule} from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {TableModule} from 'primeng/table';
// import { SearchComponent } from './libro/search/search.component';
import {InputTextModule} from 'primeng/inputtext';
import {SplitterModule} from 'primeng/splitter';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
