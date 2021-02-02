import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  links = [
    { name: 'Inicio', url: '', class: '' },
    { name: 'Lista', url: 'list', class: '' },
    { name: 'Formulario', url: 'form', class: '' }
  ];
  links2 = [
    { name: 'Cerrar Sesión', url: 'form', class: 'cerrarSesion' }
  ];

  constructor(
    public _routerRouter: Router
  ) { }

  async ngOnInit() {
    // const currentPath = this._routerRouter.routerState.snapshot.url;
    const currentPath = 'main/sectionamd';
    // Redireccionar a 'main' / hijo
    this._routerRouter.navigate([currentPath]);
  }
}
