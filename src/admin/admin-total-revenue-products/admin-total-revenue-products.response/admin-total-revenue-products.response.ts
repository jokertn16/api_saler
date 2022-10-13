import { AdminTotalRevenueProductsDataModelEntity } from "../admin-total-revenue-products.entity/admin-total-revenue-products.entity";

export class AdminTotalRevenueProductsResponse {
  product_id: number;

  product_name: string;

  sales_ratio: number;

  total_product: number;

  total_revenue: number;

  constructor(
    adminTotalRevenueProductsDataModelEntity?: AdminTotalRevenueProductsDataModelEntity
  ) {
    this.product_id = adminTotalRevenueProductsDataModelEntity
      ? +adminTotalRevenueProductsDataModelEntity.product_id
      : 0;
    this.product_name = adminTotalRevenueProductsDataModelEntity
      ? adminTotalRevenueProductsDataModelEntity.product_name
      : "";
    this.sales_ratio = adminTotalRevenueProductsDataModelEntity
      ? +adminTotalRevenueProductsDataModelEntity.sales_ratio
      : 0;
    this.total_product = adminTotalRevenueProductsDataModelEntity
      ? +adminTotalRevenueProductsDataModelEntity.total_product
      : 0;
    this.total_revenue = adminTotalRevenueProductsDataModelEntity
      ? +adminTotalRevenueProductsDataModelEntity.total_revenue
      : 0;
  }

  public mapToList(data: AdminTotalRevenueProductsDataModelEntity[]) {
    let response: AdminTotalRevenueProductsResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminTotalRevenueProductsResponse(e));
    });
    return response;
  }
}
