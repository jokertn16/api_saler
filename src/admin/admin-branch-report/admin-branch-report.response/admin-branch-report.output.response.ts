import { AdminBranchReportDataModelEntity } from "../admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportOutputEntity } from "../admin-branch-report.entity/admin-branch-report.output.entity";

export class AdminBranchReportOutputResponse {
  list: AdminBranchReportDataModelEntity[];

  total_branch: number = 0;

  total_operating_branches: number = 0;

  branch_office_is_closed: number = 0;

  constructor(
    adminBranchReportDataModelEntity: AdminBranchReportDataModelEntity[],
    adminBranchReportOutputEntity: AdminBranchReportOutputEntity
  ) {
    this.list = adminBranchReportDataModelEntity;

    this.total_branch = adminBranchReportOutputEntity.total_branch
      ? +adminBranchReportOutputEntity.total_branch
      : 0;

    this.total_operating_branches =
      adminBranchReportOutputEntity.total_operating_branches
        ? +adminBranchReportOutputEntity.total_operating_branches
        : 0;

    this.branch_office_is_closed =
      adminBranchReportOutputEntity.branch_office_is_closed
        ? +adminBranchReportOutputEntity.branch_office_is_closed
        : 0;
  }
}
