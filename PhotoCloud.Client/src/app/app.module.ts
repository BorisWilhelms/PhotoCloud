import { PhotoService } from './photo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { PhotoComponent } from './photo/photo.component';
import { RouterModule, Routes } from '@angular/router';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    ThumbnailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/thumbnails', pathMatch: 'full' },
      { path: 'thumbnails', component: ThumbnailsComponent },
      { path: 'photo/:name', component: PhotoComponent }
    ])
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
