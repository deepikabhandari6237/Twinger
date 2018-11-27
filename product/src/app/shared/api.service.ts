import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class APIService {

    httpOptions: Object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    private baseURL = 'https://jsonplaceholder.typicode.com';

    photosCount: number;
    albumsCount: number;
    commentsCount: number;

    constructor(private http: HttpClient) {
        this.getAllAlbums();
        this.getAllPhotos();
        this.getAllComments();

    }

    /* Fetch all posts*/
    getAllPosts() {
        return this.http.get(this.baseURL + '/posts')
            .toPromise()
            .then((data: any) => {
                return data;
            }).catch(error => this.handleError(error));
    }

    /* Fetch all albums*/
    getAllAlbums() {
        return this.http.get(this.baseURL + '/albums', this.httpOptions)
            .toPromise()
            .then((data: any) => {
                this.albumsCount = data.length;
                return data;
            })
            .catch(error => this.handleError(error));
    }

    /* Fetch all photos*/
    getAllPhotos() {
        return this.http.get(this.baseURL + '/photos', this.httpOptions)
            .toPromise()
            .then((data: any) => {
                this.photosCount = data.length;
                return data;
            })
            .catch(error => this.handleError(error));

    }

    /* Fetch all comments*/
    getAllComments() {
        return this.http.get(this.baseURL + '/comments', this.httpOptions)
            .toPromise()
            .then((data: any) => {
                this.commentsCount = data.length;
                return data;
            })
            .catch(error => this.handleError(error));
    }

    /* Fetch all users*/
    getAllUsers() {
        return this.http.get(this.baseURL + '/users')
            .toPromise()
            .then((data: any) => {
                return data;
            }).catch(error => this.handleError(error));
    }

    /* Add post submitted by a user*/
    addPost(data) {
        return this.http.post(this.baseURL + '/posts?userId=' + 4, data)
            .toPromise()
            .then((data: any) => {
                return data;
            }).catch(error => this.handleError(error));
    }
    /* Fetch all users post*/
    getAllUserPosts(id) {
        return this.http.get(this.baseURL + '/posts?userid='+id)
            .toPromise()
            .then((data: any) => {
                return data;
            }).catch(error => this.handleError(error));
    }

    private handleError(error: any): Promise<any> {
        if (error && (error.status == 504 || error.status == 0)) {
            error.status = 503;
            error.body = {
                error: 1,
                msg: "Unable to connect, please contact administrator."
            }

        } else {
            error.body = error.error;
        }
        return Promise.reject(error);
    }

}