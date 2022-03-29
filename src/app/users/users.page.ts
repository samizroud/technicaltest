import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { element } from 'protractor';
import { User } from '../models/user.model';
import { StoreInterface } from '../store';
import {  LoadAllAction, LoadOneAction } from '../store/actions/users.actions';



@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],

})
export class UsersPage implements OnInit {
items:User[];
user:User=new User({});

  constructor(private store:Store<StoreInterface>) { 
    this.store.dispatch(new LoadAllAction)
  }
  ngOnInit() {
    this.store.dispatch(new LoadAllAction)
    this.store.subscribe((data)=>{
      this.items=data.storeUsers.users     
    })
    
    
  }



 
}
