import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template : `<h1> Hello World From inline template</h1> 
  //<p> Angular is Awesome</p>
  //`,
  styleUrls: ['./app.component.scss']
  // styles:[`h1 {color:red}`]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   this.name.nativeElement.innerText="Happy Hotel"
  }
  title = 'hotelinventaryapp';
  @ViewChild('name',{static:true})name!:ElementRef;
  
 /* @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.no_of_rooms= 50;
  }*/
}
