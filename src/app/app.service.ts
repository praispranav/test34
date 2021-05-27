import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  list: any;
  constructor() {
    this.list = [
      {
        "id": 1, "name":"pranav Kumar", "roll": 23
      },
      {
        "id": 2, "name":"Omkar Nath", "roll": 21
      },
      {
        "id": 3, "name": "Venus", "roll": 10
      }
    ]
   }

  getEmployee(){
    return this.list
  }
  pushEmployee(event1:any, event2:any, event3:any){
    this.list.push({"id": event1, "name":event2, "roll":event3})
  }

  
}
