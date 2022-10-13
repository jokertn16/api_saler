import { IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class AdminBranchReportQueryDTO {
  @IsNotEmptyString()
  readonly status: number = -1;
}
