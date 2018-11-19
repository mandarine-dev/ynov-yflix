import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// firebase
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { RoutingModule } from '@app/routing.module';
import { ComponentsModule } from '@components/components.module';
import { CoreModule } from '@core/core.module';
import { environment } from '@env/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
