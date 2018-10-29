import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ? components
import { HomeComponent } from '@components/home/home.component';
import { AuthentificationGuard } from './core/services/authentification/authentification.guard';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthentificationGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule { }
