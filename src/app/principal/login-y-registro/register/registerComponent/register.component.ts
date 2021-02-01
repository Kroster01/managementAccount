import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  constructor(
    private routerRouter: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.routerRouter.navigate(['login']);
  }
}
