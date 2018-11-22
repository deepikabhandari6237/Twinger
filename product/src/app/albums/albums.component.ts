import {Component} from '@angular/core';
import {APIService} from '../shared/api.service'
import {Albums} from './albums';

@Component({
    selector: 'albums',
    templateUrl: 'albums.component.html',
    styleUrls: ['albums.css']
})

export class AlbumsComponent {

    albumsList: Albums[];
    p: number = 1;
    constructor(private apiService: APIService) {}

    ngOnInit() {
        this.getAlbums();
    }

    /* fetch the list of  albums*/
    getAlbums() {
        this.apiService.getAllAlbums().then(
            (data: Albums[]) => {
                this.albumsList = data;

            }, (error) => {

            })
    }
}

