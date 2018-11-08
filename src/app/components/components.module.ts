import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeProfileComponent } from './home/home-profile/home-profile.component';
import { ProgramsRoutingModule } from './home/home.routing';
import { HighlightComponent } from './highlight/highlight.component';
import { SlidersComponent } from './sliders/sliders.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProgramsRoutingModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    UserProfileComponent,
    HomeProfileComponent,
    HighlightComponent,
    SlidersComponent
  ]
})
export class ComponentsModule { }
