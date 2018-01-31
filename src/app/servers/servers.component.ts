import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  permitirCrear = false;
  servidorStatus = "Servidor no creado";
  servidorNombre = "";
  servidorCreado = false;
  servers = ['server1', 'server2', 'server3'];

  constructor() {
    setTimeout(() => {this.permitirCrear = true;}, 3000);
 }

  ngOnInit() {
  }

  crearServidor() {
    this.servidorStatus = "servidor creado";
    this.servidorCreado = true;
    this.servers.push(this.servidorNombre);
  }

  actualizarNombreServer(event: Event) {
    this.servidorNombre = (<HTMLInputElement>event.target).value;
  }

}
