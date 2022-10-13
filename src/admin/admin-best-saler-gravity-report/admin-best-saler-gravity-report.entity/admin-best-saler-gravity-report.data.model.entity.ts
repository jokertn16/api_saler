import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class AdminBestSalerGravityReportDataModelEntity {
  @PrimaryColumn()
  saler_id: number;

  @Column({ default: "" })
  name: string;

  @Column({ default: 0 })
  gravity: number;
}
