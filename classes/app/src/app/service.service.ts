import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  data = [
    {
      name: 'Master',
      age: '23'
    },
    {
      name: 'Elite',
      age: '24'
    },
    {
      name: 'Epic',
      age: '19'
    }

  ]

  addData(name: string, age: string){
    this.data.push({name: name, age: age});
  }

  showData(){

  }

  constructor() { }
}
