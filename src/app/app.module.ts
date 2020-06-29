import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.componet';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from  './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { PageNotFoundComponent } from './events/errors/404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
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
    return window.confirm('You have not saved this event do you really want to cancel?');
  }
  return true;
}
