import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { BindingdemoComponent } from './bindingdemo/bindingdemo.component';
import { TwobindingdemoComponent } from './twobindingdemo/twobindingdemo.component';

//In java
//import java.util.list;
//In TS
//import {list} from "./java/bli/java.util";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { CounterComponent } from './counter/counter.component';
import { ConditionDemoComponent } from './condition-demo/condition-demo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductComponent } from './product/product.component';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component';
import { ProductlistComponent } from './productlist/productlist.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    BindingdemoComponent,
    TwobindingdemoComponent,
    CounterComponent,
    ConditionDemoComponent,
    FordemoComponent,
    TemplateFormComponent,
    ProductComponent,
    ReactivedemoComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
