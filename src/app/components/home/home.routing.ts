import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from '@app/core/services/authentification/authentification.guard';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthentificationGuard] },
  { path: ':id', component: HomeProfileComponent, canActivate: [AuthentificationGuard] },
  { path: 'home/:id', component: HomeComponent, canActivate: [AuthentificationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
