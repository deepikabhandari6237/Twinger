import {Component} from '@angular/core';
import {APIService} from '../shared/api.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'user-posts',
    templateUrl: 'user.posts.component.html'
})

export class NgbdModalBasic {


    closeResult: string;

    constructor(private apiService: APIService,
        private modalService: NgbModal) {}

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          
        });
    }

     /*add comments to the list of Posts*/
    addPost(title: string, comment: string) {

        let data = {
            "userId": 11,
            "id": 105,
            "title": title,
            "body": comment
        }

        this.apiService.addPost(data).then((response) => {
            let data = response;
            alert(data);
        });

    }
}
