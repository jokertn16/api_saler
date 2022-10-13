import { IsInt, IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class TechresSalerJavaUpdateAvatarDTO {



    @IsNotEmptyString()
    readonly avatar: string = '';



}