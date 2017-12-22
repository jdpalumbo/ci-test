import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Password } from "./Password";
import { Identity } from "./Identity";

@Entity()
export class BasicAuthentication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column(() => Password)
    password: Password;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @OneToOne(() => Identity)
    @JoinColumn()
    identity: Identity;
}

