import { NgModule } from '@angular/core';
// firebase
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { RoutingModule } from '@app/routing.module';
import { ComponentsModule } from '@components/components.module';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
