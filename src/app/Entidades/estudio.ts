export class Estudio{
    id:number;
    titulo:string;
    instituto:string;
    fechaEgreso:number;
    logo: string;
    idPersona:number

    constructor (id:number, titulo:string, instituto:string,fechaEgreso:number,logo:string , idPersona:number )
    {
        this.id=id;
        this.titulo=titulo;
        this.instituto=instituto;
        this.fechaEgreso=fechaEgreso;
        this.logo=logo;
        this.idPersona=idPersona;
    }

}