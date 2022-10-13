import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminTotalAllSalerReportDataModelEntity {
  @PrimaryColumn()
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
