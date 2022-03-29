import { User } from "src/app/models/user.model";
import { CustomAction } from "..";
import {  FAILED, SUCCESS } from "../actions/users.actions";



const userInit:User=new User({});

export interface Users{
  users:User[],
} 

let initialUsers:Users={
  users:[userInit]
}

export function getUsers(state:Users=initialUsers,action:CustomAction){
  switch (action.type){
    case SUCCESS:{
      return {users:action.payload}
    }
    case FAILED:{
      console.log('error',action.payload)
      return state
    }
    default:
      return state
  }
}

export function getUser(state:User=userInit,action:CustomAction){
  switch (action.type){
    case SUCCESS:{
      return action.payload
    }
    case FAILED:{
      console.log('error',action.payload)
      return state
    }
    default:
      return state
  }
}


