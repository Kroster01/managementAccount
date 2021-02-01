import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private routerRouter: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('Metodo de Login');
  }

  register() {
    this.routerRouter.navigate(['register']);
  }

}
