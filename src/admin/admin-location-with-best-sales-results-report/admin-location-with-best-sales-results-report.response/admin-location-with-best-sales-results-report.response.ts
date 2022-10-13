import { AdminLocationWithBestSalesResultsReportDataModelEntity } from "../admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity";

export class AdminLocationWithBestSalesResultsReportResponse {
  city_id: number;

  city_name: string;

  total_orders: number;

  total_amount: number;

  constructor(
    adminLocationWithBestSalesResultsReportDataModelEntity?: AdminLocationWithBestSalesResultsReportDataModelEntity
  ) {
    this.city_id = adminLocationWithBestSalesResultsReportDataModelEntity
      ? +adminLocationWithBestSalesResultsReportDataModelEntity.city_id
      : 0;
    this.city_name = adminLocationWithBestSalesResultsReportDataModelEntity
      ? adminLocationWithBestSalesResultsReportDataModelEntity.city_name
      : "";
    this.total_orders = adminLocationWithBestSalesResultsReportDataModelEntity
      ? +adminLocationWithBestSalesResultsReportDataModelEntity.total_orders
      : 0;
    this.total_amount = adminLocationWithBestSalesResultsReportDataModelEntity
      ? +adminLocationWithBestSalesResultsReportDataModelEntity.total_amount
      : 0;
  }

  public mapToList(
    data: AdminLocationWithBestSalesResultsReportDataModelEntity[]
  ) {
    let response: AdminLocationWithBestSalesResultsReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminLocationWithBestSalesResultsReportResponse(e));
    });
    return response;
  }
}
