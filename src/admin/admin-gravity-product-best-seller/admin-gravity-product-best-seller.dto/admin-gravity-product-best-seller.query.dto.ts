import { IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class AdminGravityProductBestSellerQueryDTO {
  @IsNotEmptyString()
  readonly from_date: string = "";
  @IsNotEmptyString()
  readonly to_date: string = "";
  @IsNotEmptyString()
  readonly page: number = 1;
  @IsNotEmptyString()
  readonly limit: number = 500;
}
