import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {


  // private query: string;
  // private API_KEY: string = "sbBsGrbZ5dCT1jmiVOXRh5aulWC20_qfWM-s2L5mJ-U";
  // private API_URL: string ="https://pixabay.com/api/?key=";
  // private URL: string = this.API_URL + this.API_KEY + '&q=';
  // private perPage: string = "&per_page=10";
  storeArray= [];
  storeImage: any;
  constructor(private http:HttpClient) { }
 
  getSearchResult(data:string){
return this.http.get("https://api.unsplash.com/search/photos?query="+data+"&client_id=sbBsGrbZ5dCT1jmiVOXRh5aulWC20_qfWM-s2L5mJ-U");


  }
  sendData(obj:any){
    this.storeArray.push(obj)
      this.storeImage=this.storeArray;
    }
  
  receiveData():any{
      return this.storeImage;
    }
}

  