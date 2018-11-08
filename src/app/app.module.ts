import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { RoutingModule } from '@app/routing.module';
import { ComponentsModule } from '@components/components.module';
import { CoreModule } from '@core/core.module';

// firebase
import { AngularFireModule } from '@angular/fire';
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
