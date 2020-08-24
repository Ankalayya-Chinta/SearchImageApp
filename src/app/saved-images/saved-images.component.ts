import { Component, OnInit, EventEmitter } from '@angular/core';
import{SearchServiceService } from '../search-service.service';
import { Images } from '../models/images';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { AddList, UpdateList } from '../actions/list.actions'; 

@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
  favImage: any;
  listDetails: Observable<any>;
  focusOut: EventEmitter<number> = new EventEmitter<number>();
  editModeTitle = false;
  editModeDesc = false;
  lists: any;
  oldTitle: string;
  desc: string;

  constructor(private service:SearchServiceService,
    private store: Store<{ listDetails: Map<any, any>, images: [Images] }>) {
    this.listDetails = store.pipe(select('images'));
   }

  ngOnInit(): void {
    this.listDetails.subscribe(data => { 
      if (data.listDetails != undefined) {
        this.lists = data.listDetails.listMap;
        console.log(this.lists)
        return data.listDetails.listMap
      } else {
          return null;
        }
      }
    );
  }

  saveTitle(titleName) { 
    const list = new Images(); 
    list.title = titleName; 
    list.oldTitle = this.oldTitle;
    list.description = this.desc;
    this.store.dispatch(UpdateList(list));
  }

  onSelect(list,desc){
    console.log(desc);
    this.oldTitle = list;
    this.desc = desc;
  }
  saveDesc(desc) {
    const list = new Images(); 
    list.title = this.oldTitle;
    list.description = desc; 
    this.store.dispatch(UpdateList(list));
  }
  
  downloadFav(i){
    this.toDataURL(i, function (dataUrl) {
    console.log(dataUrl)
    var a = document.createElement("a"); //Create <a>
    a.href = dataUrl; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click();
  })
}
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}



}
