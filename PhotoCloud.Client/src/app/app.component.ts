import { environment } from './../environments/environment';
import { Observable } from 'rxjs/Observable';
import { PhotoService } from './photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public photos: Observable<Photo[]>;
  public photostorage = environment.photostorage;

  constructor(private _photoService: PhotoService) {

  }

  ngOnInit(): void {
    this.photos = this._photoService.GetAll();
  }
}
