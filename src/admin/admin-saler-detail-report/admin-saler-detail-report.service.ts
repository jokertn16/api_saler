import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminSalerDetailReportDataModelEntity } from "./admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity";

@Injectable()
export class AdminSalerDetailReportService {
  constructor(
    @InjectRepository(AdminSalerDetailReportDataModelEntity)
    private adminSalerDetailReportDataModelEntity: Repository<AdminSalerDetailReportDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @returns
   */

  async spGRpAdminTopBestSalerReport(
    fromDate: string,
    toDate: string
  ): Promise<AdminSalerDetailReportDataModelEntity[]> {
    let result = await this.adminSalerDetailReportDataModelEntity.query(
      "CALL sp_g_rp_admin_saler_detail_report(?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminSalerDetailReportDataModelEntity[] =
      new StoreProcedureResult<AdminSalerDetailReportDataModelEntity>().getResultList(
        result
      );

    return data;
  }
}
