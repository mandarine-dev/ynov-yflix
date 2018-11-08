import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { AuthentificationGuard } from '@app/core/services/authentification/authentification.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthentificationGuard] },
  { path: ':id', component: HomeComponent, canActivate: [AuthentificationGuard] },
  { path: 'home/:id', component: HomeProfileComponent, canActivate: [AuthentificationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
