import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  {path: "", component: ViewComponent, children:[
    {path:"", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"services", component: ServicesComponent},
    {path:"team", component: TeamComponent},
    {path:"room", component: RoomComponent},
    {path:"testimonial", component: TestimonialComponent},
    {path:"booking", component: BookingComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ViewRoutingModule { }
