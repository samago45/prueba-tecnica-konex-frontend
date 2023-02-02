import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//Importaciones de modulos creados 
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/inventario/app.routing.module';
import { InventarioModule } from "./inventario/inventario.module";


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InventarioModule
    ]
})
export class AppModule { }
