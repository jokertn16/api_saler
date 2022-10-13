import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminCustomerAlolineReportEntity } from "./admin-customer-aloline-report.entity/admin-customer-aloline-report.entity";

@Injectable()
export class AdminCustomerAlolineReportService {
  constructor(
    @InjectRepository(AdminCustomerAlolineReportEntity)
    private adminCustomerAlolineReportEntity: Repository<AdminCustomerAlolineReportEntity>
  ) {}

  async spGRpAdminCustomerAlolineReport(): Promise<AdminCustomerAlolineReportEntity> {
    let result = await this.adminCustomerAlolineReportEntity.query(
      "CALL sp_g_rp_admin_customer_aloline_report(@status,@message); SELECT @status AS status,@message AS message"
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminCustomerAlolineReportEntity =
      new StoreProcedureResult<AdminCustomerAlolineReportEntity>().getResultDetail(
        result
      );
    return data;
  }
}
