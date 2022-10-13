import { AdminGravityProductBestSellerDataModelEntity } from "../admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";
import { AdminGravityProductBestSellerOutputEntity } from "../admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.output.entity";
import { AdminGravityProductBestSellerDataModelResponse } from "./admin-gravity-product-best-seller.data.model.response";

export class AdminGravityProductBestSellerResponse {
  list_data: AdminGravityProductBestSellerDataModelResponse[];

  total_record: number;

  constructor(
    adminGravityProductBestSellerDataModelEntity?: AdminGravityProductBestSellerDataModelEntity[],
    adminGravityProductBestSellerOutputEntity?: AdminGravityProductBestSellerOutputEntity
  ) {
    this.list_data =
      new AdminGravityProductBestSellerDataModelResponse().mapToList(
        adminGravityProductBestSellerDataModelEntity
      );
    this.total_record = adminGravityProductBestSellerOutputEntity
      ? +adminGravityProductBestSellerOutputEntity.total_record
      : 0;
  }
}
