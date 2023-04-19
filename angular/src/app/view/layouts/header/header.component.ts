import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/service/utility/utility.service';
import { CloudService } from 'src/app/shared/service/cloud/cloud.service';

import { map } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  countries: any[] = [];
  url!: String;

  constructor(private us: UtilityService, private route: ActivatedRoute, private cldSer: CloudService) {

  }

  ngOnInit() {
    this.us.liveUrl.subscribe(url => {
      this.url = url;
    })

    this.getCountries();

  }


  @ViewChild('date', { static: false }) datetime!: ElementRef;
  // @ViewChild('datetime2', {static: false}) datetime2!: ElementRef;
  ngAfterViewInit() {
    const today = new Date().toISOString().split('T')[0];
    this.datetime.nativeElement.setAttribute('min', today);


    // next day
    // const nextDay = new Date().getDate() +1;
    // let newDate = new Date();
    // newDate.setDate(nextDay);
    // newDate.setHours(1);
    // newDate.setMinutes(1)

    // console.log(newDate.getHours())
    // const tomorrow = newDate.toISOString().split('.')[0];
    // this.datetime2.nativeElement.setAttribute('min', tomorrow)
  }

  getCountries() {
    this.cldSer.allCountries().pipe(
      map(items => {
        const newItems: any[] = [];
        items.forEach(item => {
          newItems.push({ name: item?.name?.common, code: item?.cca2 })
        })
        return newItems;
      })
    ).subscribe((countries) => {
      console.log(countries)
      this.countries = countries;
    })
  }
}

