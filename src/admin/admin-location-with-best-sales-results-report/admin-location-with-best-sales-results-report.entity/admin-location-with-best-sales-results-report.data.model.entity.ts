import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminLocationWithBestSalesResultsReportDataModelEntity{
    @PrimaryColumn()
    city_id:number;

    @Column({default: ""})
    city_name:string;

    @Column({default: 0})
    total_orders:number;

    @Column({default: 0})
    total_amount:number;
}