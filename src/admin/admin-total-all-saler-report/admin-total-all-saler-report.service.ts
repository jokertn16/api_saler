import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminTotalAllSalerReportDataModelEntity } from "./admin-total-all-saler-report.entity/admin-total-all-saler-report.data.model.entity";

@Injectable()
export class AdminTotalAllSalerReportService {
  constructor(
    @InjectRepository(AdminTotalAllSalerReportDataModelEntity)
    private adminTotalAllSalerReportDataModelEntity: Repository<AdminTotalAllSalerReportDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @returns
   */
  async spGRpAdminTotalAllSalerReport(
    fromDate: string,
    toDate: string
  ): Promise<AdminTotalAllSalerReportDataModelEntity> {
    let result = await this.adminTotalAllSalerReportDataModelEntity.query(
      "CALL sp_g_rp_admin_total_all_saler_report(?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminTotalAllSalerReportDataModelEntity =
      new StoreProcedureResult<AdminTotalAllSalerReportDataModelEntity>().getResultDetail(
        result
      );

    return data;
  }
}