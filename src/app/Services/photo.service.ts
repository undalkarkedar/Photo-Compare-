import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private readonly photoUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(public _http: HttpClient) {}
  getPhotoDetails() {
    return this._http.get<Photo[]>(this.photoUrl);
  }
}
