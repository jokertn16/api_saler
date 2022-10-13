import { IsInt, IsNotEmptyString } from "src/utils.common/utils.decorator.common/utils.decorator.common";

export class TechresSalerJavaUpdateDTO {

    @IsInt()
    readonly techres_saler_role_id: number = 0;

    @IsInt()
    readonly techres_saler_leader_id: number = 0;

    @IsInt()
    readonly techres_saler_commission_period_level_id: number = 0;

    @IsNotEmptyString()
    readonly avatar: string = '';

    @IsNotEmptyString()
    readonly name: string = '';

    @IsNotEmptyString()
    readonly prefix: string = '';

    @IsNotEmptyString()
    readonly normalize_name: string = '';

    @IsNotEmptyString()
    readonly phone: string = '';

    @IsNotEmptyString()
    readonly address: string = '';

    @IsNotEmptyString()
    readonly email: string = '';

    @IsNotEmptyString()
    readonly bank_name: string = '';

    @IsNotEmptyString()
    readonly bank_account_name: string = '';

    @IsNotEmptyString()
    readonly bank_account_number: string = '';

    readonly bank_account_branch: string = ''

    // @IsNotEmptyString()
    // readonly verify_code: string = '';

    // @IsInt()
    // readonly verify_fail_count: number = 0;

    // @IsNotEmptyString()
    // readonly last_review_revenue_at: string = '';

    // @IsNotEmptyString()
    // readonly short_term_commission_expire_at: string = '';

}