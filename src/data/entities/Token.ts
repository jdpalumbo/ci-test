import { Column } from "typeorm";

export class Token {
    @Column()
    public text: string;
}