import { ActionReducerMap } from '@ngrx/store';
import { User } from '../models/user.model';
import { getUser, getUsers, Users } from './reducers/users.reducers';


export interface StoreInterface{
  storeUsers:Users,
  storeUser:User
}
export interface CustomAction{
  type:string,
  payload:any
}



export const reducers:ActionReducerMap<StoreInterface>={storeUsers:getUsers,storeUser:getUser}