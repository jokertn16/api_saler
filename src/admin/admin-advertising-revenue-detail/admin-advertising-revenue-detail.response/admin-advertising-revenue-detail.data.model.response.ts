import { AdminAdvertisingRevenueDetailDataModelEntity } from "../admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";

export class AdminAdvertisingRevenueDetailDataModelResponse {
    total_revenue: number;

    report_time: string;
  
    media_length_by_second: number;
  
    constructor(
      adminAdvertisingRevenueDetailDataModelEntity?: AdminAdvertisingRevenueDetailDataModelEntity
    ) {
      this.total_revenue = adminAdvertisingRevenueDetailDataModelEntity
        ? +adminAdvertisingRevenueDetailDataModelEntity.total_revenue
        : 0;
      this.report_time = adminAdvertisingRevenueDetailDataModelEntity
        ? adminAdvertisingRevenueDetailDataModelEntity.report_time
        : "";
      this.media_length_by_second = adminAdvertisingRevenueDetailDataModelEntity
        ? +adminAdvertisingRevenueDetailDataModelEntity.media_length_by_second
        : 0;
    }
  
    public mapToList(data: AdminAdvertisingRevenueDetailDataModelEntity[]) {
      let response: AdminAdvertisingRevenueDetailDataModelResponse[] = [];
      data.forEach((e) => {
        response.push(new AdminAdvertisingRevenueDetailDataModelResponse(e));
      });
      return response;
    }

}
