import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataModel } from 'app/shared/data.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];
  user : User;
  userForm : FormGroup;
  usersModel : DataModel[];

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
    this.user = new User();
    this.userForm = this.fb.group({
      username:['', Validators.required],
      enable:''
  });
  
  this.usersModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('username', 'Nom d\'utilisateur', 'string', false, []),
      new DataModel('enable', '', 'Actif', true, [])
      
  ];

  }
  
  



}
