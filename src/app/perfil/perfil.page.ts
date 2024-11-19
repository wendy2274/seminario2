import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  personas = [   //arreglo que representa a los usuarios
    {
      nombre: 'Julissa Herrera',
      correo: 'julissa.herrera@gmail.com',
      rol: 'Estudiante',
      foto: 'https://via.placeholder.com/150', // URL de imagen de ejemplo
      contrasena: '••••',
      estado: 'Activo'
    },
    {
      nombre: 'Wendy Sinisterra',
      correo: 'wendy.sinisterra@gmail.com',
      rol: 'Docente',
      foto: 'https://via.placeholder.com/150',
      contrasena: '••••',
      estado: 'Inactivo'
    },
    {
      nombre: 'Janeida Valencia',
      correo: 'janeida.valencia@gmail.com',
      rol: 'Investigador',
      foto: 'https://via.placeholder.com/150',
      contrasena: '••••',
      estado: 'Activo'
    }
  ];

  personaSeleccionada: any = null;
  mostrarNombres = false;  // Controla la visibilidad de la lista de nombres
  editMode = false; // Controla si estamos en modo edición

  selectPersona(persona: any) {
    this.personaSeleccionada = persona;
    this.editMode = false; // Salir del modo edición si se selecciona otra persona
  }

  toggleNombres() {
    this.mostrarNombres = !this.mostrarNombres; // Alterna la visibilidad de la lista de nombres
  }

  toggleEditMode() {
    this.editMode = !this.editMode; // Cambiar entre modo edición y visualización
  }

  // guardarCambios() {
  //   console.log('Datos guardados:', this.personaSeleccionada);
  //   this.editMode = false; // Salir del modo edición tras guardar
  // }

  editProfile() {
  console.log("Editar perfil");
  // Aquí puedes agregar la lógica para editar el perfil, por ejemplo, abrir un modal o navegar a otra página
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

  
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }


  //Si hay una persona seleccionada, guarda los cambios y muestra un mensaje de éxito usando un alerta.
  async guardarCambios() {
    if (this.personaSeleccionada) {
      console.log('Datos guardados:', this.personaSeleccionada);
      this.editMode = false;

      // Muestra una alerta
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Los datos se han guardado correctamente.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      console.error('No hay ninguna persona seleccionada para guardar.');
    }
  }


}
