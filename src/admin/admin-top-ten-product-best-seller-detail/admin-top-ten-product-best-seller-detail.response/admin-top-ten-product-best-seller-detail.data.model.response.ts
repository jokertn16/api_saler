import { AdminTopTenProductBestSellerDetailDataModelEntity } from "../admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";

export class AdminTopTenProductBestSellerDetailDataModelResponse {

  product_id: number;

  product_name: string;

  total_product: number;

  total_amount: number;

  total_order: number;

  average_quantity_on_one_order: number;

  constructor(
    adminTopTenProductBestSellerDetailDataModelEntity?: AdminTopTenProductBestSellerDetailDataModelEntity
  ) {
    this.product_id = adminTopTenProductBestSellerDetailDataModelEntity
      ? +adminTopTenProductBestSellerDetailDataModelEntity.product_id
      : 0;
    this.product_name = adminTopTenProductBestSellerDetailDataModelEntity
      ? adminTopTenProductBestSellerDetailDataModelEntity.product_name
      : "";
    this.total_product = adminTopTenProductBestSellerDetailDataModelEntity
      ? +adminTopTenProductBestSellerDetailDataModelEntity.total_product
      : 0;
    this.total_amount = adminTopTenProductBestSellerDetailDataModelEntity
      ? +adminTopTenProductBestSellerDetailDataModelEntity.total_amount
      : 0;
    this.total_order = adminTopTenProductBestSellerDetailDataModelEntity
      ? +adminTopTenProductBestSellerDetailDataModelEntity.total_order
      : 0;
    this.average_quantity_on_one_order =
      adminTopTenProductBestSellerDetailDataModelEntity
        ? +adminTopTenProductBestSellerDetailDataModelEntity.average_quantity_on_one_order
        : 0;
  }

  public mapToList(data: AdminTopTenProductBestSellerDetailDataModelEntity[]) {
    let response: AdminTopTenProductBestSellerDetailDataModelResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminTopTenProductBestSellerDetailDataModelResponse(e));
    });
    return response;
  }
}