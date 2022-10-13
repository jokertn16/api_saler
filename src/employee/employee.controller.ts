import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Res,
} from "@nestjs/common";
import { ResponseData } from "src/utils.common/utils.response.common/utils.response.common";
import { EmployeeService } from "./employee.service";
import { Response } from "express";

@Controller("api/employees")
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get("/:id")
  async findOne(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();
    await this.employeeService.findOne(id);
    return res.status(HttpStatus.OK).send(response);
  }
}
