import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import AccountService from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { //initialization //life-cycle hk
  title = 'The Dating App';
  users: any;

  constructor(/*private http: HttpClient, */private accountService: AccountService){ //naturally async/ http request

  }
  ngOnInit() {
    /*this.getUsers();*/ //old way no app component to return users
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  /*getUsers(){
    this.http.get('https:///localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }*/

}
