import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminTopBestSalerReportDataModelEntity } from "./admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity";

@Injectable()
export class AdminTopBestSalerReportService {
  constructor(
    @InjectRepository(AdminTopBestSalerReportDataModelEntity)
    private adminTopBestSalerReportDataModelEntity: Repository<AdminTopBestSalerReportDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @param _offset
   *  @param _limit
   * @returns
   */

  async spGRpAdminTopBestSalerReport(
    fromDate: string,
    toDate: string,
    _offset: number,
    _limit: number
  ): Promise<AdminTopBestSalerReportDataModelEntity[]> {
    let result = await this.adminTopBestSalerReportDataModelEntity.query(
      "CALL sp_g_rp_admin_top_best_saler_report(?,?,?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate, _offset, _limit]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminTopBestSalerReportDataModelEntity[] =
      new StoreProcedureResult<AdminTopBestSalerReportDataModelEntity>().getResultList(
        result
      );

    return data;
  }
}
