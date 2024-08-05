import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Entry point of the Application
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
