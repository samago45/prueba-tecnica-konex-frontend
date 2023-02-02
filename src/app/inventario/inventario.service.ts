import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventario } from './inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  _url: string = 'http://localhost:8080/api/medicamento';

  constructor(private http: HttpClient) { }

  getInventerio(): Observable<any> {
    return this.http.get<Inventario>(this._url + "/");
  }


  getInventarioPage(page: number, size: number){
    return this.http.get<Inventario>( this._url + "page" + "?page="+ page +"&size=" + size +"&sort=fechaUso,desc" );
  }

  

  getInventarioId( id: number ){
    return this.http.get<Inventario>( this._url+ "/buscar/" +id );
  }

  
  
  guardarInventario( Inventario: Inventario ){
    return this.http.post<Inventario>( this._url+"guardar", Inventario);
  }

  actualizarInventario(id: number , inventario: Inventario ){
    return this.http.post<Inventario>( this._url+"/actualizar/" + id , inventario);
  }

  

  eliminarInventario(id: number){
    return this.http.delete(this._url+"/delete/" +id);
  }





}
