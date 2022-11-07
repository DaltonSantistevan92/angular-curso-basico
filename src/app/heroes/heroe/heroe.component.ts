import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})

export class HeroeComponent {

    nombre:string = 'Iroman';
    edad:number = 30;

    //getter 
    get nombreCapitalizado() : string {
        return  this.nombre.toUpperCase();//todo en mayuscula
    }

    obtenerNombre() : string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre() : void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad() : void {
        this.edad = 35;
    }



}