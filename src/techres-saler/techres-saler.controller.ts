import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Query, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { BaseResponseData } from 'src/utils.common/utils.response.common/utils.base.response.common';
import { ResponseData } from 'src/utils.common/utils.response.common/utils.response.common';
import { TechresSaler } from './techres-saler.entity/techres-saler.entity';
import { TechresSalerService } from './techres-saler.service';
import { Response } from "express";
import { TypeUser } from 'src/utils.common/utils.enum/utils.enum';
import { ExceptionResponseDetail } from 'src/utils.common/utils.exception.common/utils.exception.common';
import { TechresSalerResponse } from './techres-saler.response/techres-saler.response';
import { TechresSalerListDTO } from './techres-saler.dto/techres-saler-list.dto';
import { InterfaceResponse } from './techres-saler.response/techres-saler-interface.response';
import { BaseListResponseData } from 'src/utils.common/utils.response.common/utils.base-list.response.common';
import { Pagination } from 'src/utils.common/utils.pagination.pagination/utils.pagination.common';

@Controller('/api/techres-saler')
export class TechresSalerController {
  constructor(
    private techresSalerService: TechresSalerService
  ) { }

  @Get("/:id/detail")
  async findOne(
    //   @Param(new ValidationPipe())
    @Param('id', ParseIntPipe) id: number,
    //   @GetAdminFromToken() admin: Admin,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();

    let techresSaler: TechresSaler =
      await this.techresSalerService.findOne(id);
    if (techresSaler == null) {
      response.setStatus(HttpStatus.BAD_REQUEST);
      response.setMessage(HttpStatus.BAD_REQUEST, "Saler không tồn tại !");
    }
    else {
      response.setData(new TechresSalerResponse(techresSaler));
    }
    return res.status(HttpStatus.OK).send(response);
  }


  // Lấy danh sách nhân viên theo is_locked, key_search, limit, page :   Ngày 13/10/2022 - Thu
  // Chưa check quyền admin
  @Get("")
  async list(
    @Query() techresSalerListDTO: TechresSalerListDTO,
    //   @GetAdminFromToken() admin: Admin,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();



    let pagination: Pagination = new Pagination(
      techresSalerListDTO.page == undefined ? 1 : techresSalerListDTO.page,
      techresSalerListDTO.limit == undefined ? 20 : techresSalerListDTO.limit
    );
    let techresSalers: InterfaceResponse =
      await this.techresSalerService.list(
        techresSalerListDTO.is_lock == undefined ? -1 : techresSalerListDTO.is_lock,
        techresSalerListDTO.key_search == undefined ? "" : techresSalerListDTO.key_search,
        pagination

      );

    response.setData(
      new TechresSalerResponse().mapToList(
        techresSalers.list,
        techresSalers.total_record
      )
    );
    return res.status(HttpStatus.OK).send(response);
  }


  // Khóa nhan vien, chưa theo quyền, hiên tại đang khóa thoải mái :   ngày 13/10/2022 - Thu
  @Get("/:id/lock")
  async lockSaler(
    //   @Param(new ValidationPipe())
    @Param('id', ParseIntPipe) id: number,
    //   @GetAdminFromToken() admin: Admin,
    @Res() res: Response
  ): Promise<any> {
    let response: ResponseData = new ResponseData();
    let techresSaler: TechresSaler =
      await this.techresSalerService.findOne(id);
    if (techresSaler == null) {
      response.setStatus(HttpStatus.BAD_REQUEST);
      response.setMessage(HttpStatus.BAD_REQUEST, "Saler không tồn tại !");
    }
    else {
      //check permission

      // if (techresSaler.techres_saler_role_id != TypeUser.ADMIN) {
      //       response.setStatus(HttpStatus.FORBIDDEN) ; 
      //       response.setMessage(HttpStatus.BAD_REQUEST, "Bạn không có quyền khóa nhân viên!");
      // }
      // else {
      techresSaler.is_locked = (techresSaler.is_locked == 0) ? 1 : 0;
      await this.techresSalerService.save(techresSaler);
      // console.log("Oke") ; 
      // console.log(techresSaler.is_locked) ; 
      //}


      response.setData(new TechresSalerResponse(techresSaler));
    }
    return res.status(HttpStatus.OK).send(response);
  }
}
