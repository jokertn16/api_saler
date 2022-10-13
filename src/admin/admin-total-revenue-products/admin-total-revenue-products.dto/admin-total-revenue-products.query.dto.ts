import { ApiProperty } from "@nestjs/swagger";
import { UtilsBaseExceptionLangValidator } from "src/utils.common/utils.exception.lang.common/utils.base.exception.lang.validator";

export class AdminTotalRevenueProductsQueryDTO {

  @ApiProperty({
    required: false,
    default: "",
    example: "20/10/1997",
    description: UtilsBaseExceptionLangValidator.exceptionStringFromDate(),
  })
    readonly from_date: string = "";
    @ApiProperty({
      required: false,
      default: "",
      example: "20/10/1997",
      description: UtilsBaseExceptionLangValidator.exceptionStringToDate(),
    })
    readonly to_date: string = "";
  }
  