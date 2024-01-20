import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedinComponent } from './loggedin/loggedin.component';

const routes: Routes = [{
  path: 'loggedin',
  component: LoggedinComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
