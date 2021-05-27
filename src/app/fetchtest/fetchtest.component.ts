import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service"

@Component({
  selector: 'app-fetchtest',
  templateUrl: './fetchtest.component.html',
  styleUrls: ['./fetchtest.component.scss']
})
export class FetchtestComponent implements OnInit {

  employee:any;

  constructor(private abc: AppService) { 
    this.employee = ''
  }

  ngOnInit(): void {
    this.employee = this.abc.getEmployee()
  }

}
