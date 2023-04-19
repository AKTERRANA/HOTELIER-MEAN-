import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef,  AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CloudService } from 'src/app/shared/service/cloud/cloud.service';
import { environment } from 'src/environments/environment.development'

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  total: Number = 0;
  baseImgUrl: String = environment.imageUrl;
  hotels: any[] = [];
  newhotel: boolean = false;
  newHotelForm: FormGroup = new FormGroup({});
  filesArr: File[] = [];

  @ViewChild('image') imageInp!: ElementRef;


  constructor(private http: HttpClient, private cldSer: CloudService) { }
  ngOnInit() {
    this.newHotelForm = new FormGroup({
      country: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      hotelName: new FormControl("", Validators.required),
      starCategory: new FormControl("", Validators.required),
      acSingle: new FormControl(0, [Validators.required, Validators.minLength(1)]),
      acDouble: new FormControl(0, [Validators.required, Validators.minLength(1)]),
      nonacSingle: new FormControl(0, [Validators.required, Validators.minLength(1)]),
      nonacDouble: new FormControl(0, [Validators.required, Validators.minLength(1)]),
      total: new FormControl(0, [Validators.required])

    })
    this.getHotels();
  }


  @ViewChild('acSingle') acSingle!: ElementRef;
  @ViewChild('acDouble') acDouble!: ElementRef;
  @ViewChild('nonacSingle') nonacSingle!: ElementRef;
  @ViewChild('nonacDouble') nonacDouble!: ElementRef;
  @ViewChild('totalRoom') totalRoom!: ElementRef;


  updateTotalRooms() {
 this.total =0;
    if (this.acSingle && this.acDouble && this.nonacSingle && this.nonacDouble) {
      this.total = +this.acSingle.nativeElement.value + +this.acDouble.nativeElement.value + +this.nonacSingle.nativeElement.value + +this.nonacDouble.nativeElement.value;
      console.log("Total", this.total)
      this.totalRoom.nativeElement.value = this.total;
    }
  }

  getHotels() {
    this.cldSer.getHotels().subscribe({
      next: (resp) => {
        this.hotels = resp.data;
        console.log(this.hotels)
      }
    })
  }


  toggleNewHotel() {    
    this.newhotel = !this.newhotel;
    if(this.newhotel){ setTimeout(()=>{ this.updateTotalRooms(); },20)}
  }

  addFile(e: Event) {
    const form = e.currentTarget as HTMLInputElement;
    const files = form.files as FileList;
    if (form.files) {
      console.log(form.files)
      this.filesArr.push(form.files[0])
    }


  }


  onSubmit() {
    const formVal = this.newHotelForm.value;
    const fieldArr = ['country', 'city', 'hotelName',
      'starCategory', 'acSingle', 'acDouble', 'nonacSingle', 'nonacDouble', 'total'];
    const fd = new FormData();
    fd.append("userId", "62cabf2276312bca16b491f2");

    fieldArr.forEach((field, i) => {
      console.log(field)
      const key = field;
      if (key) { fd.append(`${key}`, formVal[key]) }
    })

    console.log(this.filesArr, "files Arr")
    this.filesArr.forEach((file, i) => {
      fd.append(`photo${i}`, file, file.name)
    })


    this.http.post<any>(`${environment.baseUrl}/api/hotel/newhotel`, fd, { reportProgress: true, observe: "body" }).subscribe({
      next: (res: HttpResponse<any>) => {
        console.log(res)
      }
    })
  }







}
