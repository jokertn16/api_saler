import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AdminTopTenProductBestSellerDetailDataModelEntity {
  @PrimaryColumn()
  product_id: number;

  @Column({ default: "" })
  product_name: string;

  @Column({ default: 0 })
  total_product: number;

  @Column({ default: 0 })
  total_amount: number;

  @Column({ default: 0 })
  total_order: number;

  @Column({ default: 0 })
  average_quantity_on_one_order: number;
}
