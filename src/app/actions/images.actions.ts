import {Action} from '@ngrx/store';
export enum ImagesActionTypes {
  AddImage = '[Images Component] Add',
  SearchImage = '[Images Component] Search'
}
export const GET_BY_DATA = '[Images Component] Get Data';
export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export const AddImages = payload => {
    return {
        type: ImagesActionTypes.AddImage,
        payload
    };
};

export class ImagesAdd implements ActionEx {
  readonly type = ImagesActionTypes.AddImage;
  constructor(public payload: any) {
  }
}
export class GetByDataAction implements ActionEx {
    readonly type = GET_BY_DATA;
    constructor(public payload: string) {}
  }