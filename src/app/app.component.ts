import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from './services/api.service';
import { NotificationsService} from 'angular2-notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'paveit';
  success = 'started server';
  data1:any= [];
  FirstArray: any;
  SecondArray: any;
  e:any;
  oldStack:any;
  l:any;
  m:any;
  o:any;
  p:any;
  StartButton:boolean;
  StopButton:boolean;
  newgenStack:any;
  TestStack:any;
  TestStackServer: any;
  Ftss: any;
  Tts2:any;
  Fts2: any;
  Fts2Array: void;
  togbut:boolean;
  btnfun:any;
  classname: string;
  NextgenStack: any;
  nextgenbackend: any;
  NgBeArray: any;
  AdminServer: any;
  AdminArray: any;


  constructor(public user:UserService , public service:NotificationsService ){


    this.user.getData().subscribe(data=>{
       this.data1=data;



        [this.FirstArray, this.SecondArray] = this.data1;


        this.oldStack=this.FirstArray.children[0];
        this.l=this.oldStack.children[0];
        this.m=this.l.children;


        this.p=this.oldStack.children[1];
        this.o=this.p.children;
       let {children:[TS2]} = this.SecondArray;

       this.Tts2=TS2;
       let{children:[fts2]}=this.Tts2;
       this.Fts2=fts2;
       this.Fts2Array=this.Fts2.children;
       this.NextgenStack=this.FirstArray.children[1];
       this.nextgenbackend=this.NextgenStack.children[0];
       this.NgBeArray=this.nextgenbackend.children;
       let{children:[admin , admin2]}=this.NextgenStack;
       this.AdminServer=admin2;
       this.AdminArray=this.AdminServer.children;



        console.warn(this.AdminArray);
        console.warn(this.AdminServer);



    })





  }

  ngOnInit(){

  }







togglebol(){
  this.togbut = this.togbut != true;
 //this.togbut= !(this.togbut != false);
  if(this.togbut){
    this.classname="dark-mode";
  }else{
    this.classname="light-mode";
  }
  console.log(this.classname);
  console.log(this.togbut);

}

//  public dynamicClass={
//   "dark-mode": this.togbut,
//   "light-mode": !this.togbut,

// }


// [ngStyle]="{'background-color': (StartButton) ? '#aaddce' : '#44aa8d'}"

  onSuccess(message) {

   this.StartButton=true;
   this.StopButton=false;

    this.service.success('success' ,message, {
      position:['bottom','right'],
      timeOut: 2000,
      animate:'fade',
      showProgressBar:true

    } );
  }


  onStop(message) {
    this.StartButton=false;
    this.StopButton=true;
    this.service.error('Terminated' ,message, {
      position:['bottom','right'],
      timeOut: 2000,
      animate:'fade',
      showProgressBar:true

    } );
  }






}
