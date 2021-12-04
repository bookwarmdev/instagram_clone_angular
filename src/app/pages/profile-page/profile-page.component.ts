import { Component, OnInit } from '@angular/core';
import { RestService} from 'src/app/service/rest.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit { 

  name:any;
  constructor(
    public rest: RestService,
  ) { }

  ngOnInit(): void { 

    this.name = this.rest.getUserName ;
  }

}
