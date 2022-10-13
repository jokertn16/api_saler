import { AdminTopBestSalerReportDataModelEntity } from "../admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity";

export class AdminTopBestSalerReportResponse {
  saler_id: number;

  name: string;

  total_order: number;

  constructor(
    adminTopBestSalerReportDataModelEntity?: AdminTopBestSalerReportDataModelEntity
  ) {
    this.saler_id = adminTopBestSalerReportDataModelEntity
      ? +adminTopBestSalerReportDataModelEntity.saler_id
      : 0;
    this.name = adminTopBestSalerReportDataModelEntity
      ? adminTopBestSalerReportDataModelEntity.name
      : "";
    this.total_order = adminTopBestSalerReportDataModelEntity
      ? +adminTopBestSalerReportDataModelEntity.total_order
      : 0;
  }

  public mapToList(data: AdminTopBestSalerReportDataModelEntity[]) {
    let response: AdminTopBestSalerReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminTopBestSalerReportResponse(e));
    });
    return response;
  }
}
