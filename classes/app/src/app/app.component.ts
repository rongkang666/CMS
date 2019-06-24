import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-app';
  appContent: string;
  appContent2: string;
  appdata: {name:string,age:string}[] = [];

  constructor(private ServiceService: ServiceService) { }

ngOnInit(){
  this.appdata=this.ServiceService.data;
}

  displayCounter(count) {
        console.log(count);
        this.appContent = count;
    }

    displayCounter2(v){
      console.log(v);
      this.appContent2 = v;
  
    }





}
