import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
[x: string]: any;
showPass=false;
log:any[]=[];
onToggleDetails(){
  this.showPass=!this.showPass;
  this.log.push(this.log.length+1);
}
}
