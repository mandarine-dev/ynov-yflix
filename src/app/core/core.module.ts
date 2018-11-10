import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@shared/shared.module';

// ? firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthentificationGuard } from './services/authentification/authentification.guard';
import { AuthentificationService } from './services/authentification/authentification.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    // ? firebase
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
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
    BarComponent
  ]
})
export class CoreModule { }
