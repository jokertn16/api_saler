import { AdminBestSalerGravityReportDataModelEntity } from "../admin-best-saler-gravity-report.entity/admin-best-saler-gravity-report.data.model.entity";

export class AdminBestSalerGravityReportResponse {
  saler_id: number;

  name: string;

  gravity: number;

  constructor(
    adminBestSalerGravityReportDataModelEntity?: AdminBestSalerGravityReportDataModelEntity
  ) {
    this.saler_id = adminBestSalerGravityReportDataModelEntity
      ? +adminBestSalerGravityReportDataModelEntity.saler_id
      : 0;
    this.name = adminBestSalerGravityReportDataModelEntity
      ? adminBestSalerGravityReportDataModelEntity.name
      : "";
    this.gravity = adminBestSalerGravityReportDataModelEntity
      ? +adminBestSalerGravityReportDataModelEntity.gravity
      : 0;
  }

  public mapToList(data: AdminBestSalerGravityReportDataModelEntity[]) {
    let response: AdminBestSalerGravityReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminBestSalerGravityReportResponse(e));
    });
    return response;
  }
}
