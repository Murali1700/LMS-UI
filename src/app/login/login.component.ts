import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import { User } from '../models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private shared: SharedService) {}

  users = new Array<User>;

  ngOnInit(): void {
    this.shared.validateUser().subscribe((x) => {
      this.users =  x;
    });
  }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

}
