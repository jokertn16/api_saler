import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class AdminTopBestSalerReportDataModelEntity{
    @PrimaryColumn()
    saler_id: number;

    @Column({ default: "" })
    name: string;

    @Column({ default: 0 })
    total_order: number;
}