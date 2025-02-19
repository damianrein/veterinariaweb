import { Pet } from "../pet/pet";

export interface Owner {
    id:number,
    name:string,
    lastname:string,
    email:string,
    phone:string,
    dni:number,
    pets:Pet[]
}
