import { UtilsDate } from "src/utils.common/utils.format-time.common/utils.format-time.common";
import { TechresSaler } from "../techres-saler.entity/techres-saler.entity";

export class TechresSalerResponse {
  id: number;
  techres_saler_role_id: number;
  techres_saler_leader_id: number;
  techres_saler_commission_period_level_id: number;
  birthday: string;
  avatar: string;
  name: string;
  gender: number;
  prefix: string;
  normalize_name: string;
  phone: string;
  address: string;
  email: string;
  bank_name: string;
  bank_account_name: string;
  bank_account_number: string;
  bank_account_branch: string;
  verify_code: string;
  verify_fail_count: number;
  is_locked: number;
  ward_id: number;
  district_id: number;
  city_id: number;
  join_date: string;
  created_at: string;
  updated_at: string;

  constructor(techresSaler?: TechresSaler) {
    this.id = techresSaler ? +techresSaler.id : 0;
    this.techres_saler_role_id = techresSaler
      ? +techresSaler.techres_saler_role_id
      : 0;
    this.techres_saler_leader_id = techresSaler
      ? +techresSaler.techres_saler_leader_id
      : 0;
    // this.techres_saler_commission_period_level_id = techresSaler?+ techresSaler.techres_saler_commission_period_level_id : 0;
    this.name = techresSaler ? techresSaler.name : "";
    this.birthday = techresSaler
    ? UtilsDate.formatDateTimeVNToString(techresSaler.birthday)
    : "";
    this.gender = techresSaler? techresSaler.gender : -1 ; 
    this.prefix = techresSaler ? techresSaler.prefix : "";
    this.normalize_name = techresSaler
      ? techresSaler.normalize_name
      : "";
    this.phone = techresSaler ? techresSaler.phone : "";
    this.ward_id = techresSaler ? techresSaler.ward_id : 0;
    this.district_id = techresSaler ? techresSaler.district_id : 0;
    this.city_id = techresSaler ? techresSaler.city_id : 0;
    this.address = techresSaler ? techresSaler.address : "";
    this.email = techresSaler ? techresSaler.email : "";
    this.bank_name = techresSaler ? techresSaler.bank_name : "";
    this.bank_account_name = techresSaler
      ? techresSaler.bank_account_name
      : "";
    this.bank_account_number = techresSaler
      ? techresSaler.bank_account_number
      : "";
    this.bank_account_branch = techresSaler
      ? techresSaler.bank_account_branch
      : "";
    this.verify_code = techresSaler ? techresSaler.verify_code : "";
    this.verify_fail_count = techresSaler
      ? +techresSaler.verify_fail_count
      : 0;
    this.is_locked = techresSaler ? techresSaler.is_locked : 0;

    this.join_date = techresSaler
      ? UtilsDate.formatDateTimeVNToString(techresSaler.join_date)
      : "";

   
    this.created_at = techresSaler
      ? UtilsDate.formatDateTimeVNToString(techresSaler.created_at)
      : "";
    this.updated_at = techresSaler
      ? UtilsDate.formatDateTimeVNToString(techresSaler.updated_at)
      : "";
  }

  public mapToList(data: TechresSaler[], total_record: number) {
    let response: TechresSalerResponse[] = [];
    data.forEach((e) => {
      response.push(new TechresSalerResponse(e));
    });
    return { list: response, total_record };
  }
}
