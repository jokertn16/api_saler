import { AdminTopTenProductBestSellerDetailDataModelEntity } from "../admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
import { AdminTopTenProductBestSellerDetailOutputEntity } from "../admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail.output.entity";
import { AdminTopTenProductBestSellerDetailDataModelResponse } from "./admin-top-ten-product-best-seller-detail.data.model.response";

export class AdminTopTenProductBestSellerDetailResponse {
  list_data: AdminTopTenProductBestSellerDetailDataModelResponse[];

  total_record: number;

  constructor(
    adminTopTenProductBestSellerDetailDataModelEntity?: AdminTopTenProductBestSellerDetailDataModelEntity[],
    adminTopTenProductBestSellerDetailOutputEntity?: AdminTopTenProductBestSellerDetailOutputEntity
  ) {
    this.list_data =
      new AdminTopTenProductBestSellerDetailDataModelResponse().mapToList(
        adminTopTenProductBestSellerDetailDataModelEntity
      );
    this.total_record = adminTopTenProductBestSellerDetailOutputEntity
      ? +adminTopTenProductBestSellerDetailOutputEntity.total_record
      : 0;
  }
}
