import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  showComment: String = '';
  comment: any;
  disableComment: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  send_comment(){
    this.disableComment = !this.disableComment;
  }
 
}
