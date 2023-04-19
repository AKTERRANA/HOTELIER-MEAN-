import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/service/utility/utility.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute, private us: UtilityService){ }

ngOnInit(){
this.route.url.subscribe((url)=>{
this.us.liveUrl.next(url[0].path)
})
}
 
}
