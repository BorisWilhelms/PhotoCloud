import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';
import { Photo } from './photo';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/Operator/map';

@Injectable()
export class PhotoService {

  constructor(private _http: Http) { }

  public GetAll(): Observable<Photo[]> {
    return this._http.get(environment.photoservice.getall)
      .map(r => <Photo[]>r.json());
  }
}
