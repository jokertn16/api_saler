import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminGravityProductBestSellerDataModelEntity{
    @PrimaryColumn()
    product_id:number;

    @Column({default: ""})
    product_name:string;

    @Column({default: 0})
    sales_ratio:number;
}