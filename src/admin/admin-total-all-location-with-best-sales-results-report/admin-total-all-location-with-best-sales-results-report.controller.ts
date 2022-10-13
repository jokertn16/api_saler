import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminTotalAllLocationWithBestSalesResultsReportQueryDTO } from "./admin-total-all-location-with-best-sales-results-report.dto/admin-total-all-location-with-best-sales-results-report.query.dto";
import { AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity } from "./admin-total-all-location-with-best-sales-results-report.entity/admin-total-all-location-with-best-sales-results-report.data.model.entity";
import { AdminTotalAllLocationWithBestSalesResultsReportResponse } from "./admin-total-all-location-with-best-sales-results-report.response/admin-total-all-location-with-best-sales-results-report.response";
import { AdminTotalAllLocationWithBestSalesResultsReportService } from "./admin-total-all-location-with-best-sales-results-report.service";

@Controller("/api/admin-total-all-location-with-best-sales-results-report")
export class AdminTotalAllLocationWithBestSalesResultsReportController {
  constructor(
    private adminTotalAllLocationWithBestSalesResultsReportService: AdminTotalAllLocationWithBestSalesResultsReportService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminTotalAllLocationWithBestSalesResultsReportQueryDTO: AdminTotalAllLocationWithBestSalesResultsReportQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminTotalAllLocationWithBestSalesResultsReportDataModelEntity =
      await this.adminTotalAllLocationWithBestSalesResultsReportService.spGRpAdminTotalAllLocationWithBestSalesResultsReport(
        UtilsDate.formatDateInsertDatabase(
            adminTotalAllLocationWithBestSalesResultsReportQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
            adminTotalAllLocationWithBestSalesResultsReportQueryDTO.to_date
        )
      );
    response.setData(new AdminTotalAllLocationWithBestSalesResultsReportResponse(result));
    return res.status(HttpStatus.OK).send(response);
  }
}