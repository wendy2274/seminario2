import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';  //controlador para mostrar alertas
import { Router } from '@angular/router';  //navegacion entre rutas

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private alertController: AlertController, private router: Router) {} 

  goToHome() {
    this.router.navigate(['/home']); // Navega a la página 'home'
  }
}
