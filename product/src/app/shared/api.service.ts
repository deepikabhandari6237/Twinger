import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Posts } from '../home/posts';

@Injectable()
export class APIService {

    httpOptions:Object = {
        headers: new HttpHeaders( {
            'Content-Type': 'application/json'
        } )
    };
    constructor( private http: HttpClient ) { }

    getAllPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
    
    
     getAllAlbums(){
        return this.http.get(' https://jsonplaceholder.typicode.com/albums')
    }
   
    getAllPhotos(){
        return this.http.get('https://jsonplaceholder.typicode.com/photos')
    }
    
    getAllComments(){
        return this.http.get('https://jsonplaceholder.typicode.com/comments')
    }
    
    getAllUsers(){
          return this.http.get('https://jsonplaceholder.typicode.com/users')        
    }
  
    addPost(data){
        return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
    }

}