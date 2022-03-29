import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Store
} from '@ngrx/store';
import {
  User
} from '../models/user.model';
import {
  StoreInterface
} from '../store';
import {
  LoadOneAction
} from '../store/actions/users.actions';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  user: User = new User({});
  login: string = "";
  constructor(private activatedRoute: ActivatedRoute, private store: Store < StoreInterface > ) {
    this.login = this.activatedRoute.snapshot.params.id;



  }

  ngOnInit() {
    this.store.dispatch(new LoadOneAction(this.login))
    this.store.subscribe((data) => {
      this.user = data.storeUser
    })
  }

  filtre(event) {

    this.login = event.target.value;
    if (this.login == "") {
      this.user = new User({})
    } else {
      this.store.dispatch(new LoadOneAction(this.login))
      this.store.subscribe((data) => {
        this.user = data.storeUser
      })
    }
  }

}