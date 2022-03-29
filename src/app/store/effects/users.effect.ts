import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FailedActions, LOADALL, LOADONE, LoadOneAction, SuccessAction } from "../actions/users.actions";
import {catchError, map, switchMap} from 'rxjs/operators'
import { of } from "rxjs";

@Injectable()
export class UsersEffect{
  users$=createEffect(()=>this.actions.pipe(
    ofType(LOADALL),
    switchMap(()=>this.http.get('https://api.github.com/users')
    .pipe(
      map((data)=> new SuccessAction(data)),
      catchError((err)=>of(new FailedActions(err)))
      )
    )
  ))
  constructor(private http:HttpClient,private actions:Actions){
    
  }
}
@Injectable()
export class UserEffect{
  user$=createEffect(()=>this.actions.pipe(
    ofType<LoadOneAction>(LOADONE),
    switchMap((action)=>{
      return this.http.get('https://api.github.com/users/'+action.payload)
        .pipe(
          map((data) => new SuccessAction(data)),
          catchError((err) => of(new FailedActions(err)))
        );
    }
    )
  ))
  constructor(private http:HttpClient,private actions:Actions){
    
  }
}