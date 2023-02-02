//Importaciones de componentes propios de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Importaciones de  componentes propios
import { InventarioComponent } from './inventario.component';



import { EditarInventarioComponent } from './editar-inventario/editar-inventario.component';
import { EliminarInventarioComponent } from './eliminar-inventario/eliminar-inventario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'





@NgModule({
  declarations: [
    InventarioComponent,

    EditarInventarioComponent,
    EliminarInventarioComponent,



  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   


  ],
  exports: [
    InventarioComponent,

  ]
})
export class InventarioModule { }
