import { IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";
import { ApiProperty } from "@nestjs/swagger";
import { UtilsBaseExceptionLangValidator } from "src/utils.common/utils.exception.lang.common/utils.base.exception.lang.validator";

export class AdminSalerDetailReportQueryDTO {
  
    @ApiProperty({
        required: false,
        default: "",
        example: "20/10/1997",
        description: UtilsBaseExceptionLangValidator.exceptionStringFromDate(),
      })
    @IsNotEmptyString()
    readonly from_date: string = "";

    @ApiProperty({
        required: false,
        default: "",
        example: "20/10/1997",
        description: UtilsBaseExceptionLangValidator.exceptionStringToDate(),
      })
    @IsNotEmptyString()
    readonly to_date: string = "";
}