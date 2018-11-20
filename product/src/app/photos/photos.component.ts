import { Component, OnInit } from '@angular/core';
import { APIService } from '../shared/api.service'
import { Photos } from './photos';

@Component( {
    selector: 'photos',
    templateUrl: 'photos.component.html',
    styleUrls:['photos.css']
} )

export class PhotosComponent implements OnInit {

    photosList: Photos[];

    constructor( private apiService: APIService ) { }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this.apiService.getAllPhotos().subscribe(
            ( data: Photos[] ) => {
                this.photosList = data;

            }, ( error ) => {

            } )
    }
}