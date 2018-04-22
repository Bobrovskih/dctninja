import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { modules } from './modules';
import { components } from './components';
import { pages } from './pages';

import { RootComponent } from './components';

@NgModule({
  declarations: [
    RootComponent,
    ...components,
    ...pages,
  ],
  imports: [
    BrowserModule,
    ...modules,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule { }
