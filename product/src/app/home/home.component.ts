import { Component, OnInit } from '@angular/core';
import { APIService } from '../shared/api.service'
import { Posts } from './posts';
@Component( {
    selector: 'home',
    templateUrl: 'home.component.html'
} )

export class HomeComponent implements OnInit {

    postsList: Posts[];
     p: number = 1;
    constructor( private apiService: APIService ) { }
    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.apiService.getAllPosts().subscribe(
            ( data: Posts[] ) => {
                this.postsList = data;

            }, ( error ) => {

            } )
    }
}