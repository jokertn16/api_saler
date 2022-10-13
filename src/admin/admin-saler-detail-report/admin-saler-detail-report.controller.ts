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
import { AdminSalerDetailReportQueryDTO } from "./admin-saler-detail-report.dto/admin-saler-detail-report.query.dto";
import { AdminSalerDetailReportDataModelEntity } from "./admin-saler-detail-report.entity/admin-saler-detail-report.data.model.entity";
import { AdminSalerDetailReportResponse } from "./admin-saler-detail-report.response/admin-saler-detail-report.response";
import { AdminSalerDetailReportService } from "./admin-saler-detail-report.service";

@Controller("/api/admin-saler-detail-report")
export class AdminSalerDetailReportController {
  constructor(
    private adminSalerDetailReportService: AdminSalerDetailReportService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminSalerDetailReport(
    @Query() adminSalerDetailReportQueryDTO: AdminSalerDetailReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminSalerDetailReportDataModelEntity[] =
      await this.adminSalerDetailReportService.spGRpAdminTopBestSalerReport(
        UtilsDate.formatDateInsertDatabase(
          adminSalerDetailReportQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
          adminSalerDetailReportQueryDTO.to_date
        )
      );
    response.setData(new AdminSalerDetailReportResponse().mapToList(result));
    return res.status(HttpStatus.OK).send(response);
  }
}
