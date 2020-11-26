import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { FormSuccessComponent } from './form-success/form-success.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'success', component: FormSuccessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
