import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ng g c about
import {AboutmeComponent} from './aboutme/aboutme.component';
//ng g c home
import {HomeComponent} from './home/home.component';
import {BindingdemoComponent} from './bindingdemo/bindingdemo.component';
import { TwobindingdemoComponent } from './twobindingdemo/twobindingdemo.component';
import { CounterComponent } from './counter/counter.component';
import { ConditionDemoComponent } from './condition-demo/condition-demo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivedemoComponent } from './reactivedemo/reactivedemo.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutmeComponent},
  {path:"binding",component:BindingdemoComponent},
  {path:"twobinding",component:TwobindingdemoComponent},
  {path:"counter",component:CounterComponent},
  {path:"condition",component:ConditionDemoComponent},
  {path:"for",component:FordemoComponent},
  {path:"form-template",component:TemplateFormComponent},
  {path:"productExample",component:ProductComponent},
  {path:"form-reactive",component:ReactivedemoComponent},
  {path:"productlisthttp",component:ProductlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
