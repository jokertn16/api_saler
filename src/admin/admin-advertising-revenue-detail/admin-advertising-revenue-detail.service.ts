import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import console, { log } from "console";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { AdminAdvertisingRevenueDetailDataModelEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
import { AdminAdvertisingRevenueDetailOutputEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.output.entity";

@Injectable()
export class AdminAdvertisingRevenueDetailService {
  constructor(
    @InjectRepository(AdminAdvertisingRevenueDetailDataModelEntity)
    private adminTopTenProductBestSellerDetailDataModelEntity: Repository<AdminAdvertisingRevenueDetailDataModelEntity>
  ) {}

  /**
   *@param branchId
   * @param groupByType
   * @param fromDate
   * @param toDate
   * @param _offset
   *  @param _limit
   * @returns
   */

  async spGRpAdminAdvertisingRevenueDetail(
    branchId: number,
    groupByType: number,
    fromDate: string,
    toDate: string,
    _offset: number,
    _limit: number
  ): Promise<
    StoreProcedureOutputResultInterface<
      AdminAdvertisingRevenueDetailDataModelEntity,
      object
    >
  > {
    let result =
      await this.adminTopTenProductBestSellerDetailDataModelEntity.query(
        "CALL sp_g_rp_admin_advertising_revenue_detail(?,?,?,?,?,?,@total_record,@status,@message); SELECT @total_record AS total_record,@status AS status , @message AS message",
        [branchId, groupByType, fromDate, toDate, _offset, _limit]
      );
    ExceptionStoreProcedure.validate(result);
    log(branchId, groupByType, fromDate, toDate, _offset, _limit);
    let data: StoreProcedureOutputResultInterface<
      AdminAdvertisingRevenueDetailDataModelEntity,
      AdminAdvertisingRevenueDetailOutputEntity
    > = new StoreProcedureResultOutput<AdminAdvertisingRevenueDetailDataModelEntity>().getResultOutputList(
      result
    );
    return data;
  }
}
