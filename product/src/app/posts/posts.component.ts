import {Component, OnInit} from '@angular/core';
import {APIService} from '../shared/api.service';
import {Posts} from './posts';
@Component({
    selector: 'posts',
    templateUrl: 'posts.component.html',
    styleUrls: ['../home/home.css']
})

export class PostsComponent implements OnInit {

    userPosts: Posts[];
    p: number = 1;
    constructor(private apiService: APIService) {}

    ngOnInit() {
        this.getUserPosts(1);
    }
    getUserPosts(id) {
        this.apiService.getAllUserPosts(id).then((data) => {
            this.userPosts = data;
        }, (error) => {

        })
    }

}