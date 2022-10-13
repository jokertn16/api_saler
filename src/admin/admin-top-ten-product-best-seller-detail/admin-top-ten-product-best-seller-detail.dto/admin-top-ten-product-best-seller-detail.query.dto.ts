import { ApiProperty } from "@nestjs/swagger";
import { UtilsBaseExceptionLangValidator } from "src/utils.common/utils.exception.lang.common/utils.base.exception.lang.validator";

import {
  IsNotEmpty,
  IsNotEmptyString,
} from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class AdminTopTenProductBestSellerDetailQueryDTO {
 
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

  @ApiProperty({
    required: false,
    default: 1,
    example: 1,
    description: UtilsBaseExceptionLangValidator.exceptionStringPage(),
  })
  @IsNotEmpty()
  readonly page: number = 1;

  @ApiProperty({
    required: false,
    default: 500,
    example: 500,
    description: UtilsBaseExceptionLangValidator.exceptionStringLimit(),
  })
  @IsNotEmpty()
  readonly limit: number = 500;
}
