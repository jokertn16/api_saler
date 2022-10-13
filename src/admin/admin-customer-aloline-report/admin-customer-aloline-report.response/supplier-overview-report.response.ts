import { AdminCustomerAlolineReportEntity } from "../admin-customer-aloline-report.entity/admin-customer-aloline-report.entity";

export class AdminCustomerAlolineReportResponse {

  total_customers: number;

  total_active: number;

  total_unactive: number;

  constructor(adminCustomerAlolineReportEntity?: AdminCustomerAlolineReportEntity) {
    this.total_customers = adminCustomerAlolineReportEntity 
      ? + adminCustomerAlolineReportEntity.total_customers 
      : 0;
    this.total_active = adminCustomerAlolineReportEntity 
      ? + adminCustomerAlolineReportEntity.total_active 
      : 0;
    this.total_unactive = adminCustomerAlolineReportEntity 
      ? + adminCustomerAlolineReportEntity.total_unactive 
      : 0;
  }

  public mapToList(data: AdminCustomerAlolineReportEntity[]) {
    let response: AdminCustomerAlolineReportResponse[] = [];
    data.forEach((e) => {
      response.push(new AdminCustomerAlolineReportResponse(e));
    });
    return response;
  }
}
