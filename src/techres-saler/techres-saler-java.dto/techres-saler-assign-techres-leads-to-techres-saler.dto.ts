import { IsEmptyArray, IsInt } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class TechResSaleAssignTechResLeadsToSaleDTO {

    @IsInt()
    readonly sale_id : number = 0

    @IsEmptyArray()
    readonly techres_Lead_ids : number [] = [] 

}