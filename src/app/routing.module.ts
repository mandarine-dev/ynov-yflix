import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProfileComponent } from './components/home/home-profile/home-profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
// ? components
import { AuthentificationGuard } from './core/services/authentification/authentification.guard';


const routes: Routes = [
  { path: '', component: HomeProfileComponent, pathMatch: 'full', canActivate: [AuthentificationGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule { }
