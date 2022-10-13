import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity {
  @PrimaryColumn()
  total_orders: number;

  @Column({ default: 0 })
  total_amount: number;
}
