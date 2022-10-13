import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionStoreProcedure } from "src/utils.common/utils.exception.common/utils.store-procedure-exception.common";
import { StoreProcedureResult } from "src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common";
import { Repository } from "typeorm";
import { AdminTotalRevenueProductsDataModelEntity } from "./admin-total-revenue-products.entity/admin-total-revenue-products.entity";

@Injectable()
export class AdminTotalRevenueProductsService {
  constructor(
    @InjectRepository(AdminTotalRevenueProductsDataModelEntity)
    private adminTotalRevenueProductsDataModelEntity: Repository<AdminTotalRevenueProductsDataModelEntity>
  ) {}

  /**
   *
   * @param fromDate
   * @param toDate
   * @returns
   */
  async spGRpAdminTotalRevenueProducts(
    fromDate: string,
    toDate: string
  ): Promise<AdminTotalRevenueProductsDataModelEntity[]> {
    let result = await this.adminTotalRevenueProductsDataModelEntity.query(
      "CALL sp_g_rp_admin_total_revenue_products(?,?,@status,@message); SELECT @status AS status , @message AS message",
      [fromDate, toDate]
    );
    ExceptionStoreProcedure.validate(result);
    let data: AdminTotalRevenueProductsDataModelEntity[] =
      new StoreProcedureResult<AdminTotalRevenueProductsDataModelEntity>().getResultList(
        result
      );

    return data;
  }
}
