import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Twinger';
  
  @Output() addPostClicked=new EventEmitter();
  
  addPost(){
    this.addPostClicked.emit();
  }
}
