import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminBestSalerGravityReportDataModelEntity } from "./admin-best-saler-gravity-report.entity/admin-best-saler-gravity-report.data.model.entity";

@Injectable()
export class AdminBestSalerGravityReportService {
  constructor(
    @InjectRepository(AdminBestSalerGravityReportDataModelEntity)
    private adminBestSalerGravityReportDataModelEntity: Repository<AdminBestSalerGravityReportDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   */

  async spGRpAdminBestSalerGravityReport(
    fromDate: string,
    toDate: string
  ): Promise<AdminBestSalerGravityReportDataModelEntity[]> {
    let result = await this.adminBestSalerGravityReportDataModelEntity.query(
      "CALL sp_g_rp_admin_best_saler_gravity_report(?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminBestSalerGravityReportDataModelEntity[] =
      new StoreProcedureResult<AdminBestSalerGravityReportDataModelEntity>().getResultList(
        result
      );
    return data;
  }
}
