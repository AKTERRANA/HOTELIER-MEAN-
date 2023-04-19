import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  liveUrl = new Subject<String>();
  constructor(private route: ActivatedRoute) {
    this.liveUrl.subscribe(x=>{
      console.log("subscribe", x)
    })
    this.liveUrl.next("sarmad j8i")
   }

 getUrl (){
    // return this.liveUrl.asObservable();
    return this.liveUrl.observed;
  }

  updateUrl(){
    return this.liveUrl;
  }
  
  

}
