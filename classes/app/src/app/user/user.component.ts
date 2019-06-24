import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ServiceService: ServiceService, private router: Router) { }

  ngOnInit() {

  }

addit(){
  this.ServiceService.addData("ken","26");
}

getpost(){
  this.router.navigate(['/post']);
}





}
