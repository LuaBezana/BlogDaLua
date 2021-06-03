import { Tema } from "./tema";
import { User } from "./user";

export class Postagem {
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public usuario: User
    public tema: Tema
}