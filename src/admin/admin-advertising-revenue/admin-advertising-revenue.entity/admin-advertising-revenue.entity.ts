import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminAdvertisingRevenueEntity {
    @PrimaryColumn()
    report_time: string;

    @Column({ default: 0 })
    total_revenue: number;
}