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
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminTopBestSalerReportQueryDTO } from "./admin-top-best-saler-report.dto/admin-top-best-saler-report.query.dto";
import { AdminTopBestSalerReportDataModelEntity } from "./admin-top-best-saler-report.entity/admin-top-best-saler-report.data.model.entity";
import { AdminTopBestSalerReportResponse } from "./admin-top-best-saler-report.response/admin-top-best-saler-report.response";
import { AdminTopBestSalerReportService } from "./admin-top-best-saler-report.service";

@Controller("/api/admin-top-best-saler-report")
export class AdminTopTenProductBestSellerDetailController {
  constructor(
    private adminTopBestSalerReportService: AdminTopBestSalerReportService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query() adminTopBestSalerReportQueryDTO: AdminTopBestSalerReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminTopBestSalerReportDataModelEntity[] =
      await this.adminTopBestSalerReportService.spGRpAdminTopBestSalerReport(
        UtilsDate.formatDateInsertDatabase(
          adminTopBestSalerReportQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
          adminTopBestSalerReportQueryDTO.to_date
        ),
        adminTopBestSalerReportQueryDTO._offset,
        adminTopBestSalerReportQueryDTO._limit
      );
    response.setData(new AdminTopBestSalerReportResponse().mapToList(result));
    return res.status(HttpStatus.OK).send(response);
  }
}
