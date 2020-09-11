import { BrowserModule } from '@angular/platform-browser'
import { APP_INITIALIZER, NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StatsComponent } from './stats/stats.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AdminComponent } from './admin/admin.component'
import { ConfigService } from './services/config.service'

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class AppModule { }
