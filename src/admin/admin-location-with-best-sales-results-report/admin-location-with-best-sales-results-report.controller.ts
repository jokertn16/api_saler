import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminLocationWithBestSalesResultsReportQueryDTO } from "./admin-location-with-best-sales-results-report.dto/admin-location-with-best-sales-results-report.query.dto";
import { AdminLocationWithBestSalesResultsReportDataModelEntity } from "./admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity";
import { AdminLocationWithBestSalesResultsReportResponse } from "./admin-location-with-best-sales-results-report.response/admin-location-with-best-sales-results-report.response";
import { AdminLocationWithBestSalesResultsReportService } from "./admin-location-with-best-sales-results-report.service";

@Controller("/api/admin-location-with-best-sales-results-report")
export class AdminLocationWithBestSalesResultsReportController {
  constructor(
    private adminLocationWithBestSalesResultsReportService: AdminLocationWithBestSalesResultsReportService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminLocationWithBestSalesResultsReportQueryDTO: AdminLocationWithBestSalesResultsReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminLocationWithBestSalesResultsReportDataModelEntity[] =
      await this.adminLocationWithBestSalesResultsReportService.spGRpAdminLocationWithBestSalesResultsReport(
        UtilsDate.formatDateInsertDatabase(
            adminLocationWithBestSalesResultsReportQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
            adminLocationWithBestSalesResultsReportQueryDTO.to_date
        )
      );
    response.setData(new AdminLocationWithBestSalesResultsReportResponse().mapToList(result));
    return res.status(HttpStatus.OK).send(response);
  }
}
