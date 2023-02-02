import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inventario } from './inventario';
import { InventarioService } from './inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']

})
export class InventarioComponent implements OnInit {
  
  inventarios: Inventario[] = []



  constructor(private inverntarioService: InventarioService) { }


  ngOnInit(): void {
    this.getInventerio()
   



  }

  getInventerio(): void {
    this.inverntarioService.getInventerio()
      .subscribe((response: any) => {
        this.inventarios = response;
        console.log(this.inventarios)
      });

    }



}
