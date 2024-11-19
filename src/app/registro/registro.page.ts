import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  // Funciones de navegación
  goBack() {
    console.log("Navegar hacia atrás");
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

  ngOnInit() {
  }

}
