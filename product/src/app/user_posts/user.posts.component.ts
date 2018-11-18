import {Component} from '@angular/core';
import { APIService } from '../shared/api.service'

@Component({
    selector:'user-posts',
    templateUrl:'user.posts.component.html'
})

export class UserPostsComponent{
    constructor(private apiService:APIService){}
}