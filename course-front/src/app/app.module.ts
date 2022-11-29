import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

import {ButtonModule} from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {SplitterModule} from 'primeng/splitter';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

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
