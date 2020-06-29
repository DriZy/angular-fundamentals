import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventListComponent} from './events/event-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import {PageNotFoundComponent} from './events/errors/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import {EventListResolverService} from './events/event-list-resolver.service';


const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreteEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
