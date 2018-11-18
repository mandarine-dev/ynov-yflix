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
import { BarComponent } from './bar/bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthentificationGuard } from './services/authentification/authentification.guard';
import { AuthentificationService } from './services/authentification/authentification.service';

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
    EmbedVideo
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarComponent
  ],
  providers: [
    AuthentificationService,
    AuthentificationGuard,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BarComponent,
    MaterialModule
  ]
})
export class CoreModule { }
