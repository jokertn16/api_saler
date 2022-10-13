import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminSalerDetailReportDataModelEntity {
  @PrimaryColumn()
  saler_id: number;

  @Column({ default: "" })
  saler_name: string;

  @Column({ default: 0 })
  number_order: number;

  @Column({ default: 0 })
  order_done: number;

  @Column({ default: 0 })
  provisional_revenue: number;

  @Column({ default: 0 })
  average_value_order: number;

  @Column({ default: 0 })
  revenue_cancel: number;

  @Column({ default: 0 })
  revenue_done: number;

  @Column({ default: 0 })
  rate_single_closing: number;
}
