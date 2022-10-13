import { AdminAdvertisingRevenueDetailDataModelEntity } from "../admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.entity";
import { AdminAdvertisingRevenueDetailOutputEntity } from "../admin-advertising-revenue-detail.entity/admin-advertising-revenue-detail.output.entity";
import { AdminAdvertisingRevenueDetailDataModelResponse } from "./admin-advertising-revenue-detail.data.model.response";

export class AdminAdvertisingRevenueDetailResponse {
  list_data: AdminAdvertisingRevenueDetailDataModelResponse[];

  total_record: number;

  constructor(
    adminAdvertisingRevenueDetailDataModelEntity?: AdminAdvertisingRevenueDetailDataModelEntity[],
    adminAdvertisingRevenueDetailOutputEntity?: AdminAdvertisingRevenueDetailOutputEntity
  ) {
    this.list_data =
      new AdminAdvertisingRevenueDetailDataModelResponse().mapToList(
        adminAdvertisingRevenueDetailDataModelEntity
      );
    this.total_record = adminAdvertisingRevenueDetailOutputEntity
      ? +adminAdvertisingRevenueDetailOutputEntity.total_record
      : 0;
  }
}
