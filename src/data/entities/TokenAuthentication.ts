import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Identity } from "./Identity";
import { Token } from "./Token";

@Entity()
export class TokenAuthentication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(() => Token)
    token: Token;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @OneToOne(() => Identity)
    @JoinColumn()
    identity: Identity;
}

