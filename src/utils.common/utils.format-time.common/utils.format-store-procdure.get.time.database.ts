import * as moment from "moment";
import { GetReportTimeDatabase } from "./utils.get.time.database";
import { ReportTypeEnum } from "../utils.enum/utils.report-type.enum";
import { GroupByEnum } from "../utils.enum/utils.group-by-time.enum";
import { UtilsDate } from "./utils.format-time.common";
import { HttpException, HttpStatus } from "@nestjs/common";
import { ExceptionResponseDetail } from "../utils.exception.common/utils.exception.common";

export class StoreProcedureGetReportTimeDatabase {
  public report_type: ReportTypeEnum;
  public from_date: string = "";
  public to_date: string = "";

  constructor(
    report_type: ReportTypeEnum,
    from_date?: string,
    to_date?: string
  ) {
    this.report_type = report_type;
    this.from_date = from_date ? from_date : "";
    this.to_date = to_date ? to_date : "";
  }

  /**
   *
   * @returns
   */
  public getReportTimeDatabase(): GetReportTimeDatabase {
    let reportTypes: number[] = [
      ReportTypeEnum.DEFAULT,
      ReportTypeEnum.HOUR,
      ReportTypeEnum.DAY,
      ReportTypeEnum.WEEK,
      ReportTypeEnum.MONTH,
      ReportTypeEnum.NEAREST_THREE_MONTHS,
      ReportTypeEnum.YEAR,
      ReportTypeEnum.THREE_YEARS,
      ReportTypeEnum.ALL_MONTHS,
      ReportTypeEnum.ALL_YEAR,
      ReportTypeEnum.YESTERDAY,
      ReportTypeEnum.LAST_MONTH,
      ReportTypeEnum.LAST_YEAR,
    ];
    let fromDate = "";
    let toDate = "";
    let groupType = GroupByEnum.GROUP_YEAR;

    if (reportTypes.includes(+this.report_type)) {
      switch (+this.report_type) {
        case ReportTypeEnum.HOUR:
          fromDate = moment().format("YYYY-MM-DD");
          toDate = moment().add(1, "day").format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_HOUR;
          break;

        case ReportTypeEnum.DAY:
          fromDate = moment().format("YYYY-MM-DD");
          fromDate = moment().add(1, "day").format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_HOUR;
          break;

        case ReportTypeEnum.WEEK:
          fromDate = moment()
            .startOf("week")
            .isoWeekday(1)
            .add(7, "day")
            .format("YYYY-MM-DD");
          toDate = moment()
            .startOf("week")
            .isoWeekday(1)
            .add(7, "day")
            .add(7, "day")
            .format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_WEEK;
          break;

        case ReportTypeEnum.MONTH:
          fromDate = moment().startOf("month").format("YYYY-MM-DD");
          toDate = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_DAY;
          break;

        case ReportTypeEnum.NEAREST_THREE_MONTHS:
          fromDate = moment()
            .startOf("month")
            .subtract(2, "month")
            .format("YYYY-MM-DD");
          toDate = moment().endOf("month").add(1, "day").format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_MONTH;
          break;
        case ReportTypeEnum.YEAR:


          fromDate = moment().startOf("year").format("YYYY-MM-DD");
          toDate = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_MONTH;
          break;

        case ReportTypeEnum.THREE_YEARS:
          fromDate = moment()
            .startOf("year")
            .subtract(2, "year")
            .format("YYYY-MM-DD");
          toDate = moment().endOf("year").add(1, "day").format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_YEAR;
          break;

        case ReportTypeEnum.YESTERDAY:
          fromDate = moment().subtract(1, "day").format("YYYY-MM-DD");
          toDate = moment().format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_HOUR;
          break;

        case ReportTypeEnum.LAST_MONTH:
          fromDate = moment()
            .startOf("month")
            .subtract(1, "month")
            .format("YYYY-MM-DD");
          toDate = moment()
            .subtract(1, "month")
            .endOf("month")
            .add(1, "day")
            .format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_DAY;
          break;

        case ReportTypeEnum.LAST_YEAR:
          fromDate = moment()
            .startOf("year")
            .subtract(1, "year")
            .format("YYYY-MM-DD");
          toDate = moment()
            .endOf("year")
            .subtract(1, "year")
            .add(1, "day")
            .format("YYYY-MM-DD");
          groupType = GroupByEnum.GROUP_MONTH;
          break;
      }



      // Nếu có truyền thời gian lên thì xử lý thêm chổ này


      if (
        this.from_date !== "" &&
        moment(this.from_date, "DD/MM/YYYY", true).isValid()
      ) {
        fromDate = UtilsDate.formatDateInsertDatabase(this.from_date);
      } else if (
        this.from_date !== "" &&
        !moment(this.from_date, "DD/MM/YYYY", true).isValid()
      ) {
        throw new HttpException(
          new ExceptionResponseDetail(
            HttpStatus.BAD_REQUEST,
            "Thời gian from_date không hợp lệ!"
          ),
          HttpStatus.OK
        );
      }
      if (
        this.to_date !== "" &&
        moment(this.to_date, "DD/MM/YYYY", true).isValid()
      ) {
        toDate = UtilsDate.formatDateInsertDatabase(this.to_date);
      } else if (
        this.to_date !== "" &&
        !moment(this.to_date, "DD/MM/YYYY", true).isValid()
      ) {
        throw new HttpException(
          new ExceptionResponseDetail(
            HttpStatus.BAD_REQUEST,
            "Thời gian to_date không hợp lệ!"
          ),
          HttpStatus.OK
        );
      }

      return new GetReportTimeDatabase(fromDate, toDate, groupType);
    } else {
      return new GetReportTimeDatabase();
    }
  }
}
