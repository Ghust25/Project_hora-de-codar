import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { TestsComponent } from './components/tests/tests.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesOperatorsComponent } from './components/pipes-operators/pipes-operators.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRpoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemDattailComponent } from './components/item-dattail/item-dattail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    TestsComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesOperatorsComponent,
    TwoWayBindingComponent,
    ItemDattailComponent,
  ],
  imports: [
    CommonModule,
    AppRpoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
