import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  

  showLikes:number  = 0; 
  info:any = []; 


  constructor(
    private rest: RestService,
  ) { }

  ngOnInit(): void {
    // this.getUserInfo(); 
    this.info = [];
      this.rest.getUserInfo().subscribe((resp : any) => {
        this.info = resp.results; 
        console.log(this.info); 
      }) ; 

  } 

  addLikes() {
    this.showLikes++;
    console.log(this.showLikes);
  }



}
