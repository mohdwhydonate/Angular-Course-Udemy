import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit{
allowNewServer=false;
serverCreationStatus=' No Server was created!'
  userName='';

constructor(){
  setTimeout(()=>{
    this.allowNewServer=true;
  },2000);
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
onCreateServer(){
  // this.serverCreationStatus="server was created!Name of the server is "+ this.serverName;
}
onUpdateServerName(event: any){
  // this.serverName= event.target.value;
}
onClick(){
  this.userName='';
  
}
getColor(){
  
}
}
