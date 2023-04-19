import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ServicesComponent } from './pages/services/services.component';
import { ViewComponent } from './pages/view/view.component';
import { BookingComponent } from './pages/booking/booking.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { RoomComponent } from './pages/room/room.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    
    HomeComponent,
    ServicesComponent,
    ViewComponent,
    BookingComponent,
    TeamComponent,
    TestimonialComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
