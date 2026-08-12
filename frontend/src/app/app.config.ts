import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ApplicationConfig, provideBrowserGlobalErrorListeners,  importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';   


import { routes } from './app.routes';
import { withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule, FormsModule)
    , provideRouter(routes)
    , provideBrowserGlobalErrorListeners()
    , provideHttpClient(withInterceptorsFromDi())
  ]
};
