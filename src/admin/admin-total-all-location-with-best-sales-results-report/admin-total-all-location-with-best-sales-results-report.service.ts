import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity } from "./admin-total-all-location-with-best-sales-results-report.entity/admin-total-all-location-with-best-sales-results-report.data.model.entity";

@Injectable()
export class AdminTotalAllLocationWithBestSalesResultsReportService {
  constructor(
    @InjectRepository(AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity)
    private adminTotalAllLocationWithBestSalesResultsReportDataModelEntity: Repository<AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @returns
   */
  async spGRpAdminTotalAllLocationWithBestSalesResultsReport(
    fromDate: string,
    toDate: string
  ): Promise<AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity> {
    let result = await this.adminTotalAllLocationWithBestSalesResultsReportDataModelEntity.query(
      "CALL sp_g_rp_admin_total_all_location_with_best_sales_results_report(?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity =
      new StoreProcedureResult<AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity>().getResultDetail(
        result
      );

    return data;
  }
}