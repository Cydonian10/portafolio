import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './proyecto.component.html',
})
export class ProyectoComponent {
  @Input() link: string = ""
  @Input() image: string = ""
  @Input() name: string = ""
  @Input() comentarios: string = ""
}
