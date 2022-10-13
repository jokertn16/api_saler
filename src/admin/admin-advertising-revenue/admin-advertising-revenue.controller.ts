import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { Response } from "express";
import { AdminAdvertisingRevenueQueryDTO } from "./admin-advertising-revenue.dto/admin-advertising-revenue.query.dto";
import { AdminAdvertisingRevenueEntity } from "./admin-advertising-revenue.entity/admin-advertising-revenue.entity";
import { AdminAdvertisingRevenueResponse } from "./admin-advertising-revenue.response/admin-advertising-revenue.response";
import { AdminAdvertisingRevenueService } from "./admin-advertising-revenue.service";
import { StoreProcedureGetReportTimeDatabase } from "src/utils.common/utils.format-time.common/utils.format-store-procdure.get.time.database";
import { GetReportTimeDatabase } from "src/utils.common/utils.format-time.common/utils.get.time.database";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import console from "console";

@Controller("/api/admin-advertising-revenue")
export class AdminAdvertisingRevenueController {
  constructor(
    private adminAdvertisingRevenueService: AdminAdvertisingRevenueService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query() adminAdvertisingRevenueQueryDTO: AdminAdvertisingRevenueQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let reportTime: GetReportTimeDatabase = new StoreProcedureGetReportTimeDatabase(
      adminAdvertisingRevenueQueryDTO.report_type,
      adminAdvertisingRevenueQueryDTO.from_date
    ).getReportTimeDatabase();

    let adminAdvertisingRevenue: AdminAdvertisingRevenueEntity[] =
      await this.adminAdvertisingRevenueService.spGRpAdminAdvertisingRevenue(
        reportTime.from_date,
        reportTime.to_date,
        reportTime.group_type
      );
    response.setData(
      new AdminAdvertisingRevenueResponse().mapToList(adminAdvertisingRevenue)
    );

    return res.status(HttpStatus.OK).send(response);
  }
}
  