import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La Base es: <strong> {{base}} </strong> </h3>

        <button (click)="acumular(base)"> + {{base}} </button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent {

    public titulo:string = 'Hola Ing';

    //contador
    numero: number = 10;
    //tarea
    base: number = 5;

    //mejor forma
    acumular(valor:number){
        this.numero += valor
    }

    //antigua forma
    // sumar(){
    //   this.numero += 1
    // }

    // restar(){
    //   this.numero -= 1
    // }

}