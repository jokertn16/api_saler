import { AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity } from "../admin-total-all-location-with-best-sales-results-report.entity/admin-total-all-location-with-best-sales-results-report.data.model.entity";

export class AdminTotalAllLocationWithBestSalesResultsReportResponse {
    total_orders: number;
  
    total_amount: number;

    constructor(
        AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity?: AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity
      ) {
        this.total_orders = AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity
          ? +AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity.total_orders
          : 0;
        this.total_amount = AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity
          ? +AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity.total_amount
          : 0;
      }
  }