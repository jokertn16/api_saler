import { 
    Controller, 
    Get, 
    UsePipes, 
    ValidationPipe, 
    Res, 
    HttpStatus 
} from '@nestjs/common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { Response } from "express";
import { AdminCustomerAlolineReportEntity } from './admin-customer-aloline-report.entity/admin-customer-aloline-report.entity';
import { AdminCustomerAlolineReportResponse } from './admin-customer-aloline-report.response/supplier-overview-report.response';
import { AdminCustomerAlolineReportService } from './admin-customer-aloline-report.service';


@Controller('/api/admin-customer-aloline-report')
export class AdminCustomerAlolineReportController {
    constructor(
        private adminCustomerAlolineReportService: AdminCustomerAlolineReportService
    ) { }

    @Get("")
    @UsePipes(new ValidationPipe({ transform: true }))
    async spGRpAdminCustomerAlolineReport(
        @Res() res: Response
    ): Promise<any> {
        let response: ResponseData = new ResponseData();

        let adminCustomerAlolineReportEntity: AdminCustomerAlolineReportEntity =
            await this.adminCustomerAlolineReportService.spGRpAdminCustomerAlolineReport();
        response.setData(new AdminCustomerAlolineReportResponse(adminCustomerAlolineReportEntity));
        return res.status(HttpStatus.OK).send(response);
    }
}
