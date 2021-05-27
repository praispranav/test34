import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-fetchtest2',
  templateUrl: './fetchtest2.component.html',
  styleUrls: ['./fetchtest2.component.scss']
})
export class Fetchtest2Component implements OnInit {

  fliter: any;
  newList : any;
  constructor(private abcd: AppService) { 
    this.fliter = [];
    this.newList = [];
  }

  handleClick(event1:any, event2:any, event3:any){
    this.abcd.pushEmployee(event1.value, event2.value, event3.value)
    console.log(event1.value, event2.value, event3.value)
  }
  ngOnInit(): any {
    this.fliter = this.abcd.getEmployee()
                  .filter((item:any)=> item.id === 1)
    console.log(this.fliter)
  }

}
