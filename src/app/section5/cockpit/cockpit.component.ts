import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
 @Output() serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
 @Output()blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();
 
  // newServerName = '';
  // newServerContent = '';
 @ViewChild('serverContentInput', {static: true})serverContentInput: ElementRef;
  constructor(){}

    
    onAddServer(nameInput:HTMLInputElement) {
     this.serverCreated.emit({serverName:nameInput.value,serverContent: this.serverContentInput.nativeElement.va});
    }
    
    onAddBlueprint(nameInput:HTMLInputElement) {
  this.blueprintCreated.emit({serverName:nameInput.value,serverContent: this.serverContentInput.nativeElement.value});
    }
  
  
}