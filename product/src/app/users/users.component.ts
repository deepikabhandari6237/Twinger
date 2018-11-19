import { Component, OnInit } from '@angular/core';
import { APIService } from '../shared/api.service'
import { Users } from './users';


@Component( {
    selector: 'users',
    templateUrl: 'users.component.html'
} )

export class UsersComponent implements OnInit {
        
    usersList: Users[];
    
    constructor( private apiService: APIService ) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.apiService.getAllUsers().subscribe(
            ( data: Users[] ) => {
                this.usersList = data;

            }, ( error ) => {

            } )
    }
    
    showPostForm(){
        
    }
}