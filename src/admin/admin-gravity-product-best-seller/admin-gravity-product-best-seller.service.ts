import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResultOutput } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result-output-common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { Repository } from "typeorm";
import { AdminGravityProductBestSellerDataModelEntity } from "./admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";
import { AdminGravityProductBestSellerOutputEntity } from "./admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.output.entity";

@Injectable()
export class AdminGravityProductBestSellerService {
  constructor(
    @InjectRepository(AdminGravityProductBestSellerDataModelEntity)
    private adminGravityProductBestSellerDataModelEntity: Repository<AdminGravityProductBestSellerDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @param offset
   * @param limit
   * @returns
   */
  async spGRpAdminGravityProductBestSeller(
    fromDate: string,
    toDate: string,
    offset: number,
    limit: number
  ): Promise<
    StoreProcedureOutputResultInterface<
      AdminGravityProductBestSellerDataModelEntity,
      AdminGravityProductBestSellerOutputEntity
    >
  > {
    let result = await this.adminGravityProductBestSellerDataModelEntity.query(
      "CALL sp_g_rp_admin_gravity_product_best_seller(?,?,?,?,@total_record,@status,@message); SELECT @total_record AS total_record,@status AS status , @message AS message",
      [fromDate, toDate, offset, limit]
    );
    ExceptionStoreProcedure.validate(result);
    let data: StoreProcedureOutputResultInterface<
      AdminGravityProductBestSellerDataModelEntity,
      AdminGravityProductBestSellerOutputEntity
    > = new StoreProcedureResultOutput<AdminGravityProductBestSellerDataModelEntity>().getResultOutputList(
      result
    );

    return data;
  }
}
