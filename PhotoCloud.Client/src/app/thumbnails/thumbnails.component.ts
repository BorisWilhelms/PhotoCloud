import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { environment } from '../../environments/environment';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})
export class ThumbnailsComponent implements OnInit {
  public photos: Observable<Photo[]>;
  public photostorage = environment.photostorage;

  constructor(private _photoService: PhotoService) {

  }

  ngOnInit(): void {
    this.photos = this._photoService.GetAll();
  }
}
