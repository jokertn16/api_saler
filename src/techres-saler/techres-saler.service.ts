import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TechresSaler } from './techres-saler.entity/techres-saler.entity';
import { ExceptionStoreProcedure } from 'src/utils.common/utils.exception.common/utils.store-procedure-exception.common';
import { query } from 'express';
import { TechresSalerResponse } from './techres-saler.response/techres-saler.response';
import { StoreProcedureResult } from 'src/utils.common/utils.store-procedure-result.common/utils-store-procedure-result.common';
import { InterfaceResponse } from './techres-saler.response/techres-saler-interface.response';
import { Pagination } from 'src/utils.common/utils.pagination.pagination/utils.pagination.common';

@Injectable()
export class TechresSalerService {
    constructor(
        @InjectRepository(TechresSaler)
        private techresSaler: Repository<TechresSaler>
    ) { }


    async findOne(
        id: number,
    ): Promise<TechresSaler> {
        let result =
            await this.techresSaler.findOne(id);
        return result;
    }

    async save(
        techresSaler: TechresSaler

    ): Promise<TechresSaler> {
        let result =
            await this.techresSaler.save(techresSaler);
        return result;
    }


    // Lấy danh sách nhân viên
    async list(
        is_locked : number ,
        keySearch : string , 
        pagination : Pagination

    ): Promise<InterfaceResponse> {        

        let result : TechresSaler[] = 
            await this.techresSaler.query('CALL sp_thu(?,?,?,?,@status_code,@message_error,@total_record); SELECT @status_code AS status ,@message_error AS message, @total_record as total_record',
        [
            is_locked, keySearch, pagination.getLimit(), pagination.getOffset()
        ]); 
        
        // validator store is success
        ExceptionStoreProcedure.validate(result);
        let data: InterfaceResponse = new StoreProcedureResult<TechresSaler[]>().getResultPagination(result);
        return data;  

        
    }
    ////////////////
}

