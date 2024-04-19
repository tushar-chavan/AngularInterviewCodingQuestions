import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from './question_1/progress-bar/progress-bar.component';

const routes: Routes = [
  {redirectTo: '/question1', component: ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
