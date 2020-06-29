import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule} from './user/user.module';
import {
  EventListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  PageNotFoundComponent,
  EventRouteActivatorService,
  EventListResolverService
} from './events/index';


const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreteEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: 'user', loadChildren: () => UserModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
