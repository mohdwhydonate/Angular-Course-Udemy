import { Directive, 
    ElementRef,
     HostBinding,
     HostListener, 
     Input, 
     OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
@Input() defaultColor:string='transparent';
@Input() highlightColor:string='blue';


    @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

    constructor(private elRef:ElementRef, private renderer: Renderer2){

    }
ngOnInit(){
// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
}
@HostListener('mouseenter') mouseover(eventData:Event){
//    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');
this.backgroundColor=this.highlightColor;

}
@HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor=this.defaultColor
}


}