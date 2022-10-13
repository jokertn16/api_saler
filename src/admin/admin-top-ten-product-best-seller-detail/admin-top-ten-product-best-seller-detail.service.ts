import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { AdminTopTenProductBestSellerDetailDataModelEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
import { AdminTopTenProductBestSellerDetailOutputEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail.output.entity";

@Injectable()
export class AdminTopTenProductBestSellerDetailService {
  constructor(
    @InjectRepository(AdminTopTenProductBestSellerDetailDataModelEntity)
    private adminTopTenProductBestSellerDetailDataModelEntity: Repository<AdminTopTenProductBestSellerDetailDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @param _offset
   *  @param _limit
   * @returns
   */

  async spGRpAdminTopTenProductBestSellerDetail(
    fromDate: string,
    toDate: string,
    _offset: number,
    _limit: number
  ): Promise<
    StoreProcedureOutputResultInterface<
      AdminTopTenProductBestSellerDetailDataModelEntity,
      AdminTopTenProductBestSellerDetailOutputEntity
    >
  > {
    let result =
      await this.adminTopTenProductBestSellerDetailDataModelEntity.query(
        "CALL sp_g_rp_admin_top_ten_product_best_seller_detail(?,?,?,?,@total_record,@status,@message); SELECT @total_record AS total_record, @status AS status , @message AS message",
        [fromDate, toDate, _offset, _limit]
      );
    ExceptionStoreProcedure.validate(result);

    let data: StoreProcedureOutputResultInterface<
    AdminTopTenProductBestSellerDetailDataModelEntity,
    AdminTopTenProductBestSellerDetailOutputEntity
    > = new StoreProcedureResultOutput<AdminTopTenProductBestSellerDetailDataModelEntity>().getResultOutputList(
      result
    );
    return data;
  }
}
