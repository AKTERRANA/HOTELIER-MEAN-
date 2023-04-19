import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/service/utility/utility.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private us: UtilityService){ }

ngOnInit(){
this.route.url.subscribe((url)=>{
this.us.liveUrl.next(url[0].path)
})
}
 

}
