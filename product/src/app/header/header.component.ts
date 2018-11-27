import {Component,OnInit} from '@angular/core';
import {APIService} from '../shared/api.service';

@Component({
    selector:'header',
    templateUrl:'header.component.html',
    styleUrls:['header.css']
})

export class HeaderComponent  implements OnInit{
    
    photosCount: number;
    albumsCount: number;
    commentsCount: number;

    constructor(private apiService: APIService) {}

    ngOnInit() {
        this.getPhotos();
        this.getAlbums();
        this.getComments();
    }
    
    getPhotos(){
         this.apiService.getAllPhotos().then((photos)=>{
            this.photosCount=photos.length;
        });
     
    }
    getAlbums(){
        this.apiService.getAllAlbums().then((albums)=>{
            this.albumsCount = albums.length;
        });
   
    }
    
    getComments(){
          this.apiService.getAllPhotos().then((comments)=>{
          this.commentsCount =comments.length;
        });
       
       
    }
}