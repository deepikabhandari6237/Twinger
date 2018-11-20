import { Component } from '@angular/core';
import { APIService } from '../shared/api.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component( {
    selector: 'user-posts',
    templateUrl: 'user.posts.component.html'
} )

export class UserPostsComponent {


    closeResult: string;

    constructor( private apiService: APIService,
        private modalService: NgbModal ) { }

    open( content ) {
        this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } ).result.then(( result ) => {
            this.closeResult = `Closed with: ${ result }`;
        }, ( reason ) => {
            this.closeResult = `Dismissed ${ this.getDismissReason( reason ) }`;
        } );
    }

    private getDismissReason( reason: any ): string {
        if ( reason === ModalDismissReasons.ESC ) {
            return 'by pressing ESC';
        } else if ( reason === ModalDismissReasons.BACKDROP_CLICK ) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${ reason }`;
        }
    }
}