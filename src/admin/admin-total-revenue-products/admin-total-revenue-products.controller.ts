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
import { AdminTotalRevenueProductsQueryDTO } from "./admin-total-revenue-products.dto/admin-total-revenue-products.query.dto";
import { AdminTotalRevenueProductsDataModelEntity } from "./admin-total-revenue-products.entity/admin-total-revenue-products.entity";
import { AdminTotalRevenueProductsResponse } from "./admin-total-revenue-products.response/admin-total-revenue-products.response";
import { AdminTotalRevenueProductsService } from "./admin-total-revenue-products.service";

@Controller("/api/admin-total-revenue-products")
export class AdminTotalRevenueProductsController {
  constructor(
    private adminTotalRevenueProductsService: AdminTotalRevenueProductsService
  ) {}

  @Get("")
  @UsePipes(new ValidationPipe({ transform: true }))
  async spGRpAdminAdvertisingRevenue(
    @Query()
    adminTotalRevenueProductsQueryDTO: AdminTotalRevenueProductsQueryDTO,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let result: AdminTotalRevenueProductsDataModelEntity[] =
      await this.adminTotalRevenueProductsService.spGRpAdminTotalRevenueProducts(
        UtilsDate.formatDateInsertDatabase(
          adminTotalRevenueProductsQueryDTO.from_date
        ),
        UtilsDate.formatDateInsertDatabase(
          adminTotalRevenueProductsQueryDTO.to_date
        )
      );
    response.setData(new AdminTotalRevenueProductsResponse().mapToList(result));
    return res.status(HttpStatus.OK).send(response);
  }
}
