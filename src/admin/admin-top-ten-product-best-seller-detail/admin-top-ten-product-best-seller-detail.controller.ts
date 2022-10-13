import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { Pagination } from "src/utils.common/utils.pagination.pagination/utils.pagination.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { AdminTopTenProductBestSellerDetailQueryDTO } from "./admin-top-ten-product-best-seller-detail.dto/admin-top-ten-product-best-seller-detail.query.dto";
import { AdminTopTenProductBestSellerDetailDataModelEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
import { AdminTopTenProductBestSellerDetailOutputEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail.output.entity";
import { AdminTopTenProductBestSellerDetailResponse } from "./admin-top-ten-product-best-seller-detail.response/admin-top-ten-product-best-seller-detail-response";
import { AdminTopTenProductBestSellerDetailService } from "./admin-top-ten-product-best-seller-detail.service";

@Controller("/api/admin-top-ten-product-best-seller-detail")
export class AdminTopTenProductBestSellerDetailController {
  constructor(
    private adminTopTenProductBestSellerDetailService: AdminTopTenProductBestSellerDetailService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminTopTenProductBestSellerDetailQueryDTO: AdminTopTenProductBestSellerDetailQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let page: Pagination = new Pagination(
      adminTopTenProductBestSellerDetailQueryDTO.page,
      adminTopTenProductBestSellerDetailQueryDTO.limit
    );

    let result: StoreProcedureOutputResultInterface<
    AdminTopTenProductBestSellerDetailDataModelEntity,
    AdminTopTenProductBestSellerDetailOutputEntity
  >  =
      await this.adminTopTenProductBestSellerDetailService.spGRpAdminTopTenProductBestSellerDetail(
        UtilsDate.formatDateInsertDatabase(
          adminTopTenProductBestSellerDetailQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
          adminTopTenProductBestSellerDetailQueryDTO.to_date
        ),
        page.getOffset(),
        page.getLimit()
      );
    response.setData(
      new AdminTopTenProductBestSellerDetailResponse(result.list,result.output)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
