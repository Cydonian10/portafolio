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
      <app-proyecto/>
      <app-proyecto/>
      <app-proyecto/>
    </app-proyectos>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePage { }