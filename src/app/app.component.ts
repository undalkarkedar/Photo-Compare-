import { PhotoService } from './Services/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from './model/photo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Photo Compare';
  public photos: Photo[] = [];
  public compareTable: Photo[] = [];
  public p = 1;
  constructor(public $photoService: PhotoService) {}
  ngOnInit() {
    this.photoDetails();
  }

  photoDetails() {
    this.$photoService.getPhotoDetails().subscribe((photoElements: Photo[]) => {
      this.photos = photoElements;
      this.photos.map((element) => {
        element.flags = false;
      });
    });
  }

  addCompareTable(photoId: number) {
    //We can use here findIndex or filter or find func but it's time consuming
    //insteaded of that I did indexing because we have nearby data.
    const photo = this.photos[photoId - 1];
    if (this.compareTable.indexOf(photo) === -1) {
      this.compareTable.push(photo);
    }
    this.photos[photoId - 1].flags = true;
  }

  removeCompareTable(photoId: number) {
    this.compareTable = this.compareTable.filter(
      (element) => element.id !== photoId
    );
    this.photos[photoId - 1].flags = false;
  }
}
