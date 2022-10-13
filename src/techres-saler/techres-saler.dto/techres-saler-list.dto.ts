import { IsInt } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class TechresSalerListDTO{

    @IsInt()
    readonly is_lock: number = 0;

    readonly key_search : string = '';

    @IsInt()
    readonly limit : number = 20;

    @IsInt()
    readonly page : number = 0;

}