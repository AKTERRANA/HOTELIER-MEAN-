import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    HotelsComponent,
    HotelDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { 

}
