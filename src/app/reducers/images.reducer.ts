import {ActionEx, ImagesActionTypes} from '../actions/images.actions';
import {ListActionTypes} from '../actions/list.actions';
import {Images} from '../models/images';


export const initialState = {
    listDetails: { listMap : new Map ([["", [Images]]])},
    images: []
};
export function ImagesReducer(state = initialState, action: ActionEx) { 
  switch (action.type) {
    case ImagesActionTypes.AddImage:
      return{
        ...state,  
       images: [...state.images, action.payload]
    };
    case ListActionTypes.AddList:
    {
      if (state.listDetails.listMap.has(action.payload.title)) {
        let existingImages  = state.listDetails.listMap.get(action.payload.title);
        existingImages.push(action.payload);
        state.listDetails.listMap.set(action.payload.title, existingImages)
      } else {
        state.listDetails.listMap.set(action.payload.title, [action.payload])
      }
      return state; 
    };
    case ListActionTypes.UpdateList:
    {  
      if (state.listDetails.listMap.has(action.payload.oldTitle)) {
        const oldTitle = action.payload.oldTitle;
        let existingMapValues  = state.listDetails.listMap.get(oldTitle == "" ? action.payload.title : oldTitle);
        if ( oldTitle != "") {
            state.listDetails.listMap.delete(action.payload.oldTitle);
        }
      
       let image = new Images();
       image.title = action.payload.title;
       image.description = action.payload.description;
       image.imageUrl = (<any>existingMapValues[0]).imageUrl;
       (<any>existingMapValues[0]) = image;
        state.listDetails.listMap.set(action.payload.title, existingMapValues)
      }
      return state; 
    };
   
    default:
      return state;
  }
}