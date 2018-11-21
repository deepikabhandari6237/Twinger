import { Component } from '@angular/core';
import { APIService } from '../shared/api.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component( {
    selector: 'user-posts',
    templateUrl: 'user.posts.component.html'
} )

export class NgbdModalBasic {


    closeResult: string;

    constructor( private apiService: APIService,
        private modalService: NgbModal ) { }

    open( content ) {
        this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } ).result.then(( result ) => {
            this.closeResult = `Closed with: ${ result }`;
        }, ( reason ) => {
            
        } );
    }

   
}

