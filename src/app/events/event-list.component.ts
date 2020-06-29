 import { Component } from '@angular/core';
 import { OnInit } from '@angular/core';
 import { EventService } from './shared/event.service';
 import { ToastrService } from '../common/toastr.service';

 declare let toastr;

 @Component({
    templateUrl: './event-list.component.html'
 })

 export class EventListComponent implements  OnInit  {
   events: any[];
   constructor(
     private eventService: EventService,
     private toastr: ToastrService
   ) {}
   // tslint:disable-next-line:use-lifecycle-interface
   ngOnInit(){
     this.events = this.eventService.getEvents();
   }
   handleThumbnailClick(eventName){
      this.toastr.success(eventName);
   }
 }
