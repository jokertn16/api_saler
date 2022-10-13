import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class AdminCustomerAlolineReportEntity {
  @PrimaryColumn()
  total_customers: number;

  @Column({ default: 0 })
  total_active: number;

  @Column({ default: 0 })
  total_unactive: number;
}
