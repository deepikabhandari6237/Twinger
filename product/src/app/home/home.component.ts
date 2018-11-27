import {Component, OnInit} from '@angular/core';
import {APIService} from '../shared/api.service'
import {Posts} from '../posts/posts';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls:['home.css']
})

export class HomeComponent implements OnInit {

    postsList: Posts[];
    p: number = 1;
    constructor(private apiService: APIService) {}
    ngOnInit() {
        this.getPosts();
    }

    /*fetch the list of Posts*/
    getPosts() {
        this.apiService.getAllPosts().then(
            (data: Posts[]) => {
                this.postsList = data;

            }, (error) => {

            })
    }
}