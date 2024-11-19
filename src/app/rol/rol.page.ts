import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
  roles = ['Estudiante', 'Investigador', 'Docente']; // Lista de roles

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  goToRegister() {
    this.router.navigate(['/rol-registrar']); // Navega a la página de registro de rol
  }

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


  async confirmDelete(role: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de que deseas eliminar el rol ${role}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Aquí puedes agregar la lógica para eliminar el rol
            this.roles = this.roles.filter(r => r !== role);
            console.log(`Rol eliminado: ${role}`);
          },
        },
      ],
    });

    await alert.present();
  }


}
