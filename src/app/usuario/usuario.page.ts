import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  usuarios = [
    { nombre: 'Julissa Herrera' },
    { nombre: 'Wendy Sinisterra' },
    { nombre: 'Janeida Valencia' },
  ]; // Lista de usuarios de ejemplo

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  goToRegister() {
    this.router.navigate(['/registro']); // Navega a la página de registro de usuarios
  }

  // Funciones de navegación
  goBack() {
    console.log("Navegar hacia atrás");
    // Aquí es para implementar la logica para ir a la pagina anterior
  }

  goHome() {
    this.router.navigate(['/home']);
    // Aquí se va a la pagina principal
  }

  goForward() {
    console.log("Navegar hacia adelante");
    // Aquí es para implementar la logica para ir a la siguiente pagina
  }

  goToEdit(usuario: any) {
    this.router.navigate(['/perfil'], {
      queryParams: {
        nombre: usuario.nombre
      }
    });
  }

  async confirmDelete(usuario: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de que deseas eliminar a ${usuario.nombre}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Eliminar el usuario de la lista
            this.usuarios = this.usuarios.filter(u => u !== usuario);
            console.log(`Usuario eliminado: ${usuario.nombre}`);
          },
        },
      ],
    });

    await alert.present();
  }
}
