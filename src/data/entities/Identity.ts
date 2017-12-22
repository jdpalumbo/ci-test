import { CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Session } from "./Session";

@Entity()
export class Identity {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    public created: Date;

    @UpdateDateColumn()
    public updated: Date;

    @OneToMany(() => Session, session => session.identity)
    public sessions: Session[];
}