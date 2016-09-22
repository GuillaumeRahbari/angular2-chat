import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.sass']
})
export class NameComponent {

  userName : string; 

  constructor() { 
    this.userName = null;
  }

  onSubmit() { this.userName = 'true'; }

  addName (event, data){
    if (event === 13 ){
      console.log('cc');
    }
  }

}

