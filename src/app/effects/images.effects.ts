import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions/images.actions';
import { SearchServiceService } from '../search-service.service';

@Injectable()
export class ImagesEffects {

  constructor(
    private actions$: Actions,
    private imageService: SearchServiceService
  ) {}      
    
  @Effect() 
  searchImageByData$: Observable<Action> = this.actions$
      .ofType<fromActions.GetByDataAction>(fromActions.GET_BY_DATA)
      .map(action => action.payload)
      .switchMap(data => 
         this.imageService.getSearchResult(data)
      );    
}