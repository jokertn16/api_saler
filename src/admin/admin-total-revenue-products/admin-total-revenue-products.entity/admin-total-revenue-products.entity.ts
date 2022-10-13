import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminTotalRevenueProductsDataModelEntity{
    @PrimaryColumn()
    product_id:number;

    @Column({default: ""})
    product_name:string;

    @Column({default: 0})
    sales_ratio:number;

    @Column({default: 0})
    total_product:number;

    @Column({default: 0})
    total_revenue:number;
}