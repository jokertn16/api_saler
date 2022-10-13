import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminLocationWithBestSalesResultsReportDataModelEntity } from "./admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity";

@Injectable()
export class AdminLocationWithBestSalesResultsReportService {
  constructor(
    @InjectRepository(AdminLocationWithBestSalesResultsReportDataModelEntity)
    private adminLocationWithBestSalesResultsReportDataModelEntity: Repository<AdminLocationWithBestSalesResultsReportDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @returns
   */
  async spGRpAdminLocationWithBestSalesResultsReport(
    fromDate: string,
    toDate: string
  ): Promise<AdminLocationWithBestSalesResultsReportDataModelEntity[]> {
    let result = await this.adminLocationWithBestSalesResultsReportDataModelEntity.query(
      "CALL sp_g_rp_admin_location_with_best_sales_results_report(?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminLocationWithBestSalesResultsReportDataModelEntity[] =
      new StoreProcedureResult<AdminLocationWithBestSalesResultsReportDataModelEntity>().getResultList(
        result
      );

    return data;
  }
}