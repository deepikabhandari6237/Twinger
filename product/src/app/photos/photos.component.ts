import { Component } from '@angular/core';
import { APIService } from '../shared/api.service'
import { Photos } from './photos';

@Component({
    selector: 'photos',
    templateUrl: 'photos.component.html'
})

export class PhotosComponent {

    photosList: Photos[];
    constructor( private apiService: APIService ) { }
    ngOnInit() {
        this.getAlbums();
    }

    getAlbums() {
        this.apiService.getAllPhotos().subscribe(
            ( data: Photos[] ) => {
                this.photosList = data;

            }, ( error ) => {

            } )
    }
}