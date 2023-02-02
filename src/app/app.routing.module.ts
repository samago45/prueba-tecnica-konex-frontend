import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarInventarioComponent } from "./inventario/editar-inventario/editar-inventario.component";
import { EliminarInventarioComponent } from "./inventario/eliminar-inventario/eliminar-inventario.component";
import { InventarioComponent } from "./inventario/inventario.component";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    imports: [ BrowserModule,InventarioComponent,EditarInventarioComponent,EliminarInventarioComponent,
        RouterModule.forRoot([
            { path: 'app-inventario', component: InventarioComponent },
            { path: 'app-editar-inventario', component: EditarInventarioComponent },
            { path: 'app-eliminar-inventario', component: EliminarInventarioComponent },
            { path: '', redirectTo: '/app-inventario', pathMatch: 'full' }
        ]),],
    exports: []
})

export class AppRoutingModule { }