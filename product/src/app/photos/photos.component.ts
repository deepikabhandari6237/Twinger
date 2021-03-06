import {Component, OnInit} from '@angular/core';
import {APIService} from '../shared/api.service'
import {Photos} from './photos';

@Component({
    selector: 'photos',
    templateUrl: 'photos.component.html',
    styleUrls: ['photos.css']
})

export class PhotosComponent implements OnInit {

    photosList: Photos[];
    p: number = 1;
    constructor(private apiService: APIService) {}

    ngOnInit() {
        this.getPhotos();
    }

    /*fetch the list of Posts*/
    getPhotos() {
        this.apiService.getAllPhotos().then(
            (data: Photos[]) => {
                this.photosList = data;
            }, (error) => {

            })
    }
}