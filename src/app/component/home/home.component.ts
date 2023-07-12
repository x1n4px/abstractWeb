import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  informacion = [
    {
      nombre: 'Branches',
      descripcion: 'Abstract Branches lets you manage, version, and document your design in one place.',
      url: 'https://www.frontendpractice.com/projects/abstract',
      imagen: './assets/control-de-versiones.png'
    },
    {
      nombre: 'Manage your account',
      descripcion: 'Configure your account settings, such as your email, profile details, and password.',
      url: 'https://www.frontendpractice.com/projects/abstract',
      imagen: './assets/account-manager.png'
    },
    {
      nombre: 'Manage organizations, teams, and projects',
      descripcion: 'Use Abstract organizations, teams, and project to organize your people and your work.',
      url: 'https://www.frontendpractice.com/projects/abstract',
      imagen: './assets/rompecabezas.png'
    },
    {
      nombre: 'Manage billing',
      descripcion: 'Change subscriptions and payment details',
      url: 'https://www.frontendpractice.com/projects/abstract',
      imagen: './assets/dolar.png'
    },
    {
      nombre: 'Authenticate to Abstract',
      descripcion: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning',
      url: 'https://www.frontendpractice.com/projects/abstract',
      imagen: './assets/clave.png'
    },
    {
      nombre: 'Abstract support',
      descripcion: 'Get in touch with a human',
      url: 'https://www.frontendpractice.com/projects/abstract',
      imagen: './assets/chat.png'
    }
  ]

  terminoBusqueda: string = '';
  searchResults: string[] = [];

   helpCenterData: string[] = [
    'Cómo restablecer la contraseña',
    'Solución de problemas de conexión',
    'Cómo contactar al servicio de soporte',
    'Guía de configuración del producto',
    'Cómo realizar un pedido',
    'Cómo cancelar una suscripción',
    'Preguntas frecuentes sobre facturación',
    'Solución de problemas de audio',
    'Guía de instalación del software',
    'Cómo configurar las notificaciones',
    'Cómo solicitar una devolución',
    'Preguntas frecuentes sobre envío',
    'Cómo agregar nuevos usuarios',
    'Solución de problemas de red',
    'Cómo actualizar el perfil de usuario',
    'Guía de uso de la API',
    'Cómo cambiar la dirección de envío',
    'Preguntas frecuentes sobre garantía',
    'Cómo exportar datos',
    'Solución de problemas de impresión',
    'Cómo gestionar los permisos de usuario',
    'Cómo realizar una copia de seguridad',
    'Guía de integración con otras plataformas',
    'Cómo realizar una reserva',
    'Preguntas frecuentes sobre privacidad',
    'Cómo importar datos',
    'Solución de problemas de seguridad',
    'Cómo configurar la autenticación de dos factores',
    'Guía de personalización del tema',
    'Cómo enviar comentarios y sugerencias'
  ];

  actualizarResultados() {
    // Realiza la lógica de búsqueda aquí
    // Por ejemplo, puedes filtrar los resultados del arreglo original basándote en el término de búsqueda
    // Asegúrate de asignar los resultados filtrados al arreglo `resultados`
    let Results = ['pizza', 'manzana', 'calabvaza', 'arco'];

    this.searchResults = this.terminoBusqueda !== '' ? this.helpCenterData.filter(datos => datos.includes(this.terminoBusqueda)) : [];
  }

  buscar() {
    // Realizar la lógica de búsqueda aquí y asignar los resultados a this.searchResults
    // Puede ser una solicitud HTTP a un servidor o cualquier otra lógica de búsqueda
    console.log(this.terminoBusqueda);
    // Ejemplo con resultados estáticos
    let Results = ['pizza', 'manzana', 'calabvaza', 'arco'];
    this.searchResults = this.terminoBusqueda !== '' ? this.helpCenterData.filter(datos => datos.includes(this.terminoBusqueda)) : [];
  }



}
