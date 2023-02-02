import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarInventarioComponent } from "./editar-inventario/editar-inventario.component";
import { EliminarInventarioComponent } from "./eliminar-inventario/eliminar-inventario.component";
import { InventarioComponent } from "./inventario.component";

const routes : Routes = [
    {path: '' , redirectTo:'/app-inventario' ,pathMatch: 'full'},
    {path: 'app-inventario' , component: InventarioComponent},
    {path: 'app-editar-inventario' , component: EditarInventarioComponent},
    {path: 'app-eliminar-inventario' , component: EliminarInventarioComponent},
    
    

]

@NgModule({
    
    imports: [RouterModule.forRoot(routes)] , 
    exports:[]
})

export class AppRoutingModule {}