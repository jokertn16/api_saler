import { AdminBranchReportDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";


export class AdminBranchReportResponse {
  id: number;

  name: string;

  phone_number: string;

  address_full_text: string;
  

  constructor(adminBranchReportDataModelEntity?: AdminBranchReportDataModelEntity) {
    this.id = adminBranchReportDataModelEntity ? +adminBranchReportDataModelEntity.id : 0;
    this.name = adminBranchReportDataModelEntity ? adminBranchReportDataModelEntity.name : "";
    this.phone_number = adminBranchReportDataModelEntity
      ? adminBranchReportDataModelEntity.phone_number
      : "";
    this.address_full_text = adminBranchReportDataModelEntity
      ? adminBranchReportDataModelEntity.address_full_text
      : "";
  }

  public mapToList(data: AdminBranchReportDataModelEntity[]) {
    let response: AdminBranchReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminBranchReportResponse(e));
    });
    return response;
  }
}
