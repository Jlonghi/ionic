import { Component } from '@angular/core';

//importing http support
//import { HTTP } from '@ionic-native/http';

//importing the account class from external decleration
import { Account } from './accountClass';
import { HTTP } from '@ionic-native/http';

//filling the account class
const ACCOUNTS: Account[] = [
  { id: 11, name:"hi" },
  { id: 12, name:"chris" }
];

@Component({
  selector: 'page-account-ionic',
  templateUrl: 'account.html'
})

export class AccountPage {
  //declaring it for view
  accounts = ACCOUNTS;
  posts: any;  
  
 constructor(private http: HTTP){
    console.log("hey");
    this.http.get('http://httpbin.org/ip', {}, {}).then(data=>{
    
    this.posts = data.data;
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);
  });
    
  }  

}

