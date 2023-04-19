import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CloudService {
  countriesApi = "https://restcountries.com/v3.1/all";
  hotelUrl = `${environment.baseUrl}/api/hotel`
  constructor(private http: HttpClient){  }

  allCountries(){
   return this.http.get<any[]>(this.countriesApi);
  }


  getHotels(){
    return this.http.get<{success: boolean, data: any[]}>(this.hotelUrl)
  }

















  fireBaseConfigure(){
    // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA12tEJ2liCygAixFCY6y-Rw-qg3bgdh4",
  authDomain: "chillhere-d8b6f.firebaseapp.com",
  projectId: "chillhere-d8b6f",
  storageBucket: "chillhere-d8b6f.appspot.com",
  messagingSenderId: "742031629235",
  appId: "1:742031629235:web:5c4670daa968a894e409c6",
  measurementId: "G-T9BVEJW7JZ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  }
}
