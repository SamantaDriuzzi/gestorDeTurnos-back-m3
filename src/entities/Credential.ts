import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "Credentials",
})
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
