import { AdminTotalAllSalerReportDataModelEntity } from "../admin-total-all-saler-report.entity/admin-total-all-saler-report.data.model.entity";

export class AdminTotalAllSalerReportResponse {
  number_order: number;

  order_done: number;

  provisional_revenue: number;

  average_value_order: number;

  revenue_cancel: number;

  revenue_done: number;

  rate_single_closing: number;

  constructor(
    adminTotalAllSalerReportDataModelEntity?: AdminTotalAllSalerReportDataModelEntity
  ) {
    this.number_order = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.number_order
      : 0;
    this.order_done = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.order_done
      : 0;
    this.provisional_revenue = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.provisional_revenue
      : 0;
    this.average_value_order = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.average_value_order
      : 0;
    this.revenue_cancel = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.revenue_cancel
      : 0;
    this.revenue_done = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.revenue_done
      : 0;
    this.rate_single_closing = adminTotalAllSalerReportDataModelEntity
      ? +adminTotalAllSalerReportDataModelEntity.rate_single_closing
      : 0;
  }

  public mapToList(data: AdminTotalAllSalerReportDataModelEntity[]) {
    let response: AdminTotalAllSalerReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminTotalAllSalerReportResponse(e));
    });
    return response;
  }
}
