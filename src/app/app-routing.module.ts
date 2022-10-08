import { ItemDattailComponent } from './components/item-dattail/item-dattail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesOperatorsComponent } from './components/pipes-operators/pipes-operators.component';
import { TestsComponent } from './components/tests/tests.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDattailComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'pipes-operators', component: PipesOperatorsComponent },
  { path: 'change-number', component: ChangeNumberComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'if-render', component: IfRenderComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'parent-data', component: ParentDataComponent },

  { path: 'tests', component: TestsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRpoutingModule {}
