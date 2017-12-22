import { Column } from "typeorm";

export class Password {
    @Column()
    public hash: string;
}