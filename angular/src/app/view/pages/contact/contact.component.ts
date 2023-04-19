import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/service/utility/utility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute, private us: UtilityService){ }

ngOnInit(){
this.route.url.subscribe((url)=>{
this.us.liveUrl.next(url[0].path)
})
}
 
}
