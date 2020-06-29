 import { Component } from '@angular/core';
 import { OnInit } from '@angular/core';
 import { EventService } from './shared/event.service';
 import { ToastrService } from '../common/toastr.service';
 import {ActivatedRoute} from '@angular/router';

 declare let toastr;

 @Component({
    templateUrl: './event-list.component.html'
 })

 export class EventListComponent implements  OnInit  {
   events: any;
   constructor(
     private eventService: EventService,
     private toastr: ToastrService,
     private route: ActivatedRoute
   ) {}

   // tslint:disable-next-line:use-lifecycle-interface
   ngOnInit(){
     // this.eventService.getEvents().subscribe(events => { this.events = events; });
     this.events = this.route.snapshot.data.events;
   }
   handleThumbnailClick(eventName){
      this.toastr.success(eventName);
   }
 }
