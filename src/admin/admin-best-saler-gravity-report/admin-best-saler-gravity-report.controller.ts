import { Controller, Get, HttpStatus, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { AdminBestSalerGravityReportQueryDTO } from "./admin-best-saler-gravity-report.dto/admin-best-saler-gravity-report.query.dto";
import { AdminBestSalerGravityReportDataModelEntity } from "./admin-best-saler-gravity-report.entity/admin-best-saler-gravity-report.data.model.entity";
import { AdminBestSalerGravityReportResponse } from "./admin-best-saler-gravity-report.response/admin-best-saler-gravity-report.response";
import { AdminBestSalerGravityReportService } from "./admin-best-saler-gravity-report.service";

@Controller("/api/admin-best-saler-gravity-report")
export class AdminBestSalerGravityReportController{
    constructor(
        private adminBestSalerGravityReportService : AdminBestSalerGravityReportService
    ){}

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpAdminBestSalerGravityReport(
        @Query() adminBestSalerGravityReportQueryDTO: AdminBestSalerGravityReportQueryDTO,
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let result: AdminBestSalerGravityReportDataModelEntity[] =
            await this.adminBestSalerGravityReportService.spGRpAdminBestSalerGravityReport(
                UtilsDate.formatDateInsertDatabase(adminBestSalerGravityReportQueryDTO.from_date),
                UtilsDate.formatDateInsertDatabase(adminBestSalerGravityReportQueryDTO.to_date)
            );
        response.setData(
            new AdminBestSalerGravityReportResponse().mapToList(result)
        );
        return res.status(HttpStatus.OK).send(response);
    }
}