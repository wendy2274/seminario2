import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol-registrar',
  templateUrl: './rol-registrar.page.html',
  styleUrls: ['./rol-registrar.page.scss'],
})
export class RolRegistrarPage implements OnInit {
   // Funciones de navegación
   goBack() {
    this.router.navigate(['/rol']);
    // Aquí podrías implementar la lógica de ir a la página anterior
  }

  goHome() {
    this.router.navigate(['/home']);
    // Aquí podrías implementar la lógica de ir a la página principal
  }

  goForward() {
    console.log("Navegar hacia adelante");
    // Aquí podrías implementar la lógica de ir a la siguiente página
  }

  constructor(private router: Router) { }

  ngOnInit() {}

}
