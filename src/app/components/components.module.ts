import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { HighlightComponent } from './highlight/highlight.component';
import { HomeProfileComponent } from './home/home-profile/home-profile.component';
import { HomeComponent } from './home/home.component';
import { ProgramsRoutingModule } from './home/home.routing';
import { HomeNewProfileComponent } from './home/new-profile/new-profile.component';
import { LoginComponent } from './login/login.component';
import { SlidersComponent } from './sliders/sliders.component';
import { VideoModalComponent } from './sliders/video-modal/video-modal.component';
import { ProfileDeleteModalComponent } from './user-profile/profile-delete-modal/profile-delete-modal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './login/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ProgramsRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    HomeProfileComponent,
    HomeNewProfileComponent,
    LoginComponent,
    UserProfileComponent,
    HighlightComponent,
    SlidersComponent,
    VideoModalComponent,
    ProfileDeleteModalComponent,
    SignupComponent
  ],
  exports: [
    VideoModalComponent,
  ],
  entryComponents: [
    VideoModalComponent,
    ProfileDeleteModalComponent
  ]
})
export class ComponentsModule { }
