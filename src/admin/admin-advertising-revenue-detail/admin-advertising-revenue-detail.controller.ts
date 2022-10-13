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
import { StoreProcedureGetReportTimeDatabase } from "src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database";
import { GetReportTimeDatabase } from "src/utils.common/utils.format-time.common/utils.get.time.database";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { StoreProcedureOutputResultInterface } from "src/utils.common/utils.store-procedure-result.common/utils.store-procedure-output-result.interface.common";
import { AdminAdvertisingRevenueDetailQueryDTO } from "./admin-advertising-revenue-detail.dto/admin-advertising-revenue-detail.query.dto";
import { AdminAdvertisingRevenueDetailDataModelEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
import { AdminAdvertisingRevenueDetailOutputEntity } from "./admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.output.entity";
import { AdminAdvertisingRevenueDetailResponse } from "./admin-advertising-revenue-detail.response/admin-advertising-revenue-detail.response";
import { AdminAdvertisingRevenueDetailService } from "./admin-advertising-revenue-detail.service";
import { Pagination } from "./../../utils.common/utils.pagination.pagination/utils.pagination.common";

@Controller("/api/admin-advertising-revenue-detail")
export class AdminAdvertisingRevenueDetailController {
  constructor(
    private adminAdvertisingRevenueDetailService: AdminAdvertisingRevenueDetailService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminAdvertisingRevenueDetailQueryDTO: AdminAdvertisingRevenueDetailQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let page: Pagination = new Pagination(
      adminAdvertisingRevenueDetailQueryDTO.page,
      adminAdvertisingRevenueDetailQueryDTO.limit
    );

    let reportTime: GetReportTimeDatabase = new StoreProcedureGetReportTimeDatabase(
      adminAdvertisingRevenueDetailQueryDTO.report_type,
      adminAdvertisingRevenueDetailQueryDTO.from_date
    ).getReportTimeDatabase();

    let result: StoreProcedureOutputResultInterface<
      AdminAdvertisingRevenueDetailDataModelEntity,
      any
    > = await this.adminAdvertisingRevenueDetailService.spGRpAdminAdvertisingRevenueDetail(
      adminAdvertisingRevenueDetailQueryDTO.branch_id,
      reportTime.group_type,
      reportTime.from_date,
      reportTime.to_date,
      page.getOffset(),
      page.getLimit()
    );
    response.setData(
      new AdminAdvertisingRevenueDetailResponse(result.list, result.output)
    );
    return res.status(HttpStatus.OK).send(response);
  }
}
