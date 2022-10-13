import { AdminSalerDetailReportDataModelEntity } from "../admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity";

export class AdminSalerDetailReportResponse {
  saler_id: number;

  saler_name: string;

  number_order: number;

  order_done: number;

  provisional_revenue: number;

  average_value_order: number;

  revenue_cancel: number;

  revenue_done: number;

  rate_single_closing: number;

  constructor(
    adminSalerDetailReportDataModelEntity?: AdminSalerDetailReportDataModelEntity
  ) {
    this.saler_id = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.saler_id
      : 0;
    this.saler_name = adminSalerDetailReportDataModelEntity
      ? adminSalerDetailReportDataModelEntity.saler_name
      : "";
    this.number_order = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.number_order
      : 0;
    this.order_done = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.order_done
      : 0;
    this.provisional_revenue = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.provisional_revenue
      : 0;
    this.average_value_order = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.average_value_order
      : 0;
    this.revenue_cancel = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.revenue_cancel
      : 0;
    this.revenue_done = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.revenue_done
      : 0;
    this.rate_single_closing = adminSalerDetailReportDataModelEntity
      ? +adminSalerDetailReportDataModelEntity.rate_single_closing
      : 0;
  }

  public mapToList(data: AdminSalerDetailReportDataModelEntity[]) {
    let response: AdminSalerDetailReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminSalerDetailReportResponse(e));
    });
    return response;
  }
}
