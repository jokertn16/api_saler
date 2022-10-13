import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminTopTenProductBestSellerDetailController } from "./admin-branch-report.controller";
import { AdminBranchReportDataModelEntity } from "./admin-branch-report.entity/admin-branch-report.entity";
import { AdminBranchReportService } from "./admin-branch-report.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminBranchReportDataModelEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        AdminBranchReportModule,
      ],
      controllers: [AdminTopTenProductBestSellerDetailController],
      providers: [AdminBranchReportService],
      exports: [AdminBranchReportService]
})
export class AdminBranchReportModule {}