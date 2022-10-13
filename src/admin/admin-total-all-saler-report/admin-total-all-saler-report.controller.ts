import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminTotalAllSalerReportQueryDTO } from "./admin-total-all-saler-report.dto/admin-total-all-saler-report.query.dto";
import { AdminTotalAllSalerReportDataModelEntity } from "./admin-total-all-saler-report.entity/admin-total-all-saler-report.data.model.entity";
import { AdminTotalAllSalerReportResponse } from "./admin-total-all-saler-report.response/admin-total-all-saler-report.response";
import { AdminTotalAllSalerReportService } from "./admin-total-all-saler-report.service";

@Controller("/api/admin-total-all-saler-report")
export class AdminTotalAllSalerReportController {
  constructor(
    private adminTotalAllSalerReportService: AdminTotalAllSalerReportService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminTotalAllSalerReport(
    @Query()
    adminTotalAllSalerReportQueryDTO: AdminTotalAllSalerReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminTotalAllSalerReportDataModelEntity =
      await this.adminTotalAllSalerReportService.spGRpAdminTotalAllSalerReport(
        UtilsDate.formatDateInsertDatabase(
            adminTotalAllSalerReportQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
            adminTotalAllSalerReportQueryDTO.to_date
        )
      );
    response.setData(new AdminTotalAllSalerReportResponse(result));
    return res.status(HttpStatus.OK).send(response);
  }
}