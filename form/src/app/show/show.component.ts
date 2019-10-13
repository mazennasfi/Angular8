import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  user: User;
  constructor(private userServise: UserService) { }

  ngOnInit() {
    this.user = this.userServise.getUser();
  }

}
