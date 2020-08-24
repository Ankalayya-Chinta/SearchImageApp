import { Component, OnInit, Inject} from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {select, Store} from '@ngrx/store'; 
import {Images} from '../models/images'; 
import {Observable} from 'rxjs'; 
import {ImagesAdd, AddImages} from '../actions/images.actions'; 
import { AddList } from '../actions/list.actions';


@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {
  listName : any = "";
  descName : any = "";
  list:string = "";
  data:any;
  link:String;
  favImages : any;
  pageUrl: any;
  imageName: any;
  val1: any;
  display: boolean;
  list1: any;
  listValues: any = [];
  list2: any;
  object: { name: any; description:any; imageUrl: any; };
  showInput: boolean;
  favList: boolean;
  favLists: any[];
  images: Observable<Images[]>;
  listDetails: Observable<any>;
  lists: Map<any, any>;


  constructor(private service :SearchServiceService,public snackBar: MatSnackBar,private dialogRef: MatDialogRef<AddFavouriteComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  private store: Store<{listDetails: Map<any, any>, images: [Images]  }>) { 

    this.listDetails = store.pipe(select('images'));
    this.data = data;
  this.pageUrl = data.user.name
  this.imageName = data.alt_description;


  }
 
  ngOnInit(): void { 
    this.lists;
    this.listDetails.subscribe(data => { 
      if (data.listDetails != undefined) {
        this.lists = data.listDetails.listMap;
        return data.listDetails.listMap
      } else {
          return null;
        }
      }
    );

    if(this.lists.size != 0){
    this.favList = true;
    this.favLists = [...new Set(this.lists.keys())]
    }
  }
  addSelected(){
    this.service.sendData(this.data)
    
  }
  
  onRadioBtnClick(list) {
    this.val1 = list;
  }
  addToFavourities(titleName:string,description:string){
    console.log(titleName);

    const list = new Images(); 
    list.title = titleName; 
    list.description = description;
    list.imageUrl = this.data.urls.small; console.log(list);
    this.store.dispatch(AddList(list));
  }
  addToExisting(titleName:string,description:string){
    
    const list = new Images(); 
    list.title = titleName; 
    list.description = description;
    list.imageUrl = this.data.urls.small; 
    this.store.dispatch(AddList(list));
  }
  addNewList(){
    this.showInput = true
  }  
 
}
