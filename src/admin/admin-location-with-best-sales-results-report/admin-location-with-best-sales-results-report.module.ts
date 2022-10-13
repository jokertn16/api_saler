import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminLocationWithBestSalesResultsReportController } from "./admin-location-with-best-sales-results-report.controller";
import { AdminLocationWithBestSalesResultsReportDataModelEntity } from "./admin-location-with-best-sales-results-report.entity/admin-location-with-best-sales-results-report.data.model.entity";
import { AdminLocationWithBestSalesResultsReportService } from "./admin-location-with-best-sales-results-report.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([AdminLocationWithBestSalesResultsReportDataModelEntity]),
      PassportModule.register({ defaultStrategy: "jwt" }),
      JwtModule.register({
        secret: process.env.SECRET_TOKEN,
      }),
      AdminLocationWithBestSalesResultsReportModule,
    ],
    controllers: [AdminLocationWithBestSalesResultsReportController],
    providers: [AdminLocationWithBestSalesResultsReportService],
    exports: [AdminLocationWithBestSalesResultsReportService],
  })
  export class AdminLocationWithBestSalesResultsReportModule {}