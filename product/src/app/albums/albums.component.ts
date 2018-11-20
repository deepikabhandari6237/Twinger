import {Component} from '@angular/core';
import { APIService } from '../shared/api.service'
import { Albums } from './albums';

@Component({
    selector:'albums',
    templateUrl:'albums.component.html',
    styleUrls:['albums.css']
})

export class AlbumsComponent{
    
      albumsList: Albums[];
    constructor( private apiService: APIService ) { }
    ngOnInit() {
        this.getAlbums();
    }

    getAlbums() {
        this.apiService.getAllAlbums().subscribe(
            ( data:Albums[] ) => {
                this.albumsList = data;
                
            }, ( error ) => {

            } )
    }
}

