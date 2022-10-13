import { AdminAdvertisingRevenueEntity } from "../admin-advertising-revenue.entity/admin-advertising-revenue.entity";

export class AdminAdvertisingRevenueResponse {

    report_time: string;

    total_revenue: number;

	constructor(adminAdvertisingRevenueEntity?: AdminAdvertisingRevenueEntity){
        this.report_time = adminAdvertisingRevenueEntity
        ? adminAdvertisingRevenueEntity.report_time
        : "";
      this.total_revenue = adminAdvertisingRevenueEntity
        ? +adminAdvertisingRevenueEntity.total_revenue
        : 0;
    }

    public mapToList(data: AdminAdvertisingRevenueEntity[]) {
      let response: AdminAdvertisingRevenueResponse[] = [];
      data.forEach((e) => {
        response.push(new AdminAdvertisingRevenueResponse(e));
      });
      return response;
    }
    
}