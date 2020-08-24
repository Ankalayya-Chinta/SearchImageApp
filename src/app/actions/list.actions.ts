import {Action} from '@ngrx/store';
export enum ListActionTypes {
  AddList = '[List Component] Add',
  UpdateList = '[List Component] Update'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export const AddList = payload => {
    return {
        type: ListActionTypes.AddList,
        payload
    };
};


export const UpdateList = payload => {
    return {
        type: ListActionTypes.UpdateList,
        payload
    };
};