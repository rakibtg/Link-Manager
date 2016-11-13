import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './shared/star.component';
import { HeaderComponent } from './header/header.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { ProductListComponent } from './products/product-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    VideoFormComponent,
    StarComponent,
    VideoPlayerComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }