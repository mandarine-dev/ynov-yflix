import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
// ? firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@app/material.module';
import { SharedModule } from '@shared/shared.module';
import { EmbedVideo } from 'ngx-embed-video';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';
import { BarComponent } from './bar/bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryModalComponent } from './header/header-modal/category-modal/category-modal.component';
import { HeaderModalComponent } from './header/header-modal/header-modal.component';
import { HeaderComponent } from './header/header.component';
import { AuthentificationGuard } from './services/authentification/authentification.guard';
import { AuthentificationService } from './services/authentification/authentification.service';
import { NotifyService } from './services/notify.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    // ? firebase
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    MaterialModule,
    EmbedVideo,
    NgxFlagIconCssModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarComponent,
    HeaderModalComponent,
    CategoryModalComponent
  ],
  providers: [
    AuthentificationService,
    AuthentificationGuard,
    NotifyService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BarComponent,
    MaterialModule,
    HeaderModalComponent,
    CategoryModalComponent
  ],
  entryComponents: [
    HeaderModalComponent,
    CategoryModalComponent
  ]
})
export class CoreModule { }
