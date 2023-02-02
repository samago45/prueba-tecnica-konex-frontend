import { Component } from '@angular/core';
import { Inventario } from '../inventario';

@Component({
  selector: 'app-editar-inventario',
  templateUrl: './editar-inventario.component.html',
  styleUrls: ['./editar-inventario.component.css']
})
export class EditarInventarioComponent {

  inventario : Inventario = new Inventario()


}
