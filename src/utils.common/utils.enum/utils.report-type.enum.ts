
export enum ReportTypeEnum {
  DEFAULT = -1, // mawj ddinjh
  HOUR = 0, //Lấy theo Tời gian
  DAY = 1, //lấy theo ngày
  WEEK = 2, // lấy theo tuần
  MONTH = 3, // lấy theo tháng
  NEAREST_THREE_MONTHS = 4, // lấy theo 3 tháng gần nhất
  YEAR = 5, // lấy theo năm
  THREE_YEARS = 6, // lấy theo 3 năm gần nhất
  ALL_MONTHS = 7, // lấy tất cả thời gian
  ALL_YEAR = 8, // lấy tất cả thời gian
  YESTERDAY = 9, // lấy theo ngày hôm qua
  LAST_MONTH = 10, // lấy theo tháng trước
  LAST_YEAR = 11, //Lấy theo năm trước
}
