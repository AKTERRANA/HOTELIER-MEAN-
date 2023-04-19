

import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./pages/admin/admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component"
import { BookingComponent } from "./pages/booking/booking.component";
import { HotelsComponent } from "./pages/hotels/hotels.component";
import { HotelDetailsComponent } from "./pages/hotel-details/hotel-details.component";


const routes: Routes =[
  {path:"", component: AdminComponent, children:[
    {path: "", component: DashboardComponent},
    {path:"booking", component: BookingComponent},
    {path: "hotels", component: HotelsComponent},
    {path: "hotel/:id", component: HotelDetailsComponent}
  ]}
]



@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class AdminRoutingModule{

}