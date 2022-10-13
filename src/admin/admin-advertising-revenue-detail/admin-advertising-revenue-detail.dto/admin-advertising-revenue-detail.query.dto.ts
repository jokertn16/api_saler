export class AdminAdvertisingRevenueDetailQueryDTO{

    readonly branch_id: number = -1

    readonly report_type: number = -1;
    
    readonly from_date: string = "";

    readonly to_date: string = "";

    readonly page: number = 1;

    readonly limit: number = 100;
}