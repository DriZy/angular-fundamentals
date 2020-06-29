import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  PageNotFoundComponent,
  EventRouteActivatorService,
  EventListResolverService
} from './events/index';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolverService,
    {
      provide: 'canDeactivateCreteEvent',
      useValue: checkFormState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkFormState( component: CreateEventComponent ) {
  if (component.isDirty){
    return window.confirm('You have not saved this event do you really want to cancel ?');
  }
  return true;
}
