import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavBarComponent } from '@/components/navbar/navbar.component';
import { ProyectosComponent } from '@/components/proyectos/proyectos.component';
import { ProyectoComponent } from '@/components/proyecto/proyecto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, ProyectosComponent,ProyectoComponent],
  template: `
    <app-nav-bar/>
    <app-proyectos >
      @for (proyecto of proyectos; track $index) {
        <app-proyecto 
          [comentarios]="proyecto.comentarios" 
          [image]="proyecto.image"
          [link]="proyecto.link"
          [name]="proyecto.name"
        />
      }
    </app-proyectos>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePage {

  public proyectos: any[] = [
    {
      link: 'https://remarkable-paletas-be4b03.netlify.app/home', 
      name: "Tienda Online",
      image : "assets/tienda.png", 
      comentarios:"Modelo de un tienda ecomerse para la venta de ropa"
    },
    { 
      link: 'https://virgen-de-fatima.netlify.app/home#inicio', 
      name: "Virgen de Fatima", 
      image : "assets/tramites.png", 
      comentarios:"Protito para el manejo de tramites y asistencias"
    },
    { 
      link: 'https://glowing-peony-705b7f.netlify.app/no-auth',
      name: "Petgram", 
      image : "assets/pet.png", 
      comentarios:"Una web que te permite ver fotos de animales"
    },
  ]


 }