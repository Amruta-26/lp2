import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  username = '';
  password='';

  userList=[
    {
      name:'adwait',
      pass:'123456'
    },
    {
      name:'Ramesh',
      pass:'123456'
    }
  ]

  handleAdd=()=>{
      let temp={name:this.username,pass:this.password}
      this.userList.push(temp);
  }




  ngOnInit(): void {
  }

}
