import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  id:any = "tab1";
  active: any;

  
  constructor() { }

  ngOnInit(): void {
    
  }

tabChange(ids:any){
  this.id = ids;

}



}
