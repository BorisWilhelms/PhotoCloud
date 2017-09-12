import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  public image: string;
  public photostorage = environment.photostorage;

  constructor(private _route: ActivatedRoute) {
    _route.params
      .map(p => p['name'])
      .subscribe(name => this.image = name);
  }
}
