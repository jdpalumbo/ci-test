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

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => Identity)
    @JoinColumn()
    identity: Identity;

    @Column()
    public status: string;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;
}