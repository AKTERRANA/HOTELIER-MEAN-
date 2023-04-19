import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/service/utility/utility.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  constructor(private route: ActivatedRoute, private us: UtilityService){ }

ngOnInit(){
this.route.url.subscribe((url)=>{
this.us.liveUrl.next(url[0].path)
})
}
 
}
