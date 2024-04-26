import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerFirstName: string;

  @Column()
  ownerLastName: string;

  @Column()
  ownerAddress: string;

  @Column()
  createdAt: Date;

  @Column()
  paid: boolean;
}
