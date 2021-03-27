import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../users/User.entity";

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  content: string;

  @ManyToOne((type) => User, (usr) => usr.sentMessages)
  @JoinColumn({ name: "senderId" })
  sender: User;

  @Column()
  senderId: number;

  @ManyToOne((type) => User, (usr) => usr.recievedMessages)
  @JoinColumn({ name: "recieverId" })
  reciever: User;

  @Column()
  recieverId: number;

  @Column()
  sentAt: Date;

  @Column()
  seenAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
