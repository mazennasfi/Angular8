import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  userModel = new User('', '', '', '', 0);

  errorMsg = '';
  ngOnInit() {

  }


  constructor(private userServise: UserService, private router: Router) { }



  onSubmit() {


    this.userServise.setUser(this.userModel);
    this.router.navigate(['show']);
    console.log(this.userModel);

  }
}
