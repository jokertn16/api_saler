import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminCustomerAlolineReportController } from "./admin-customer-aloline-report.controller";
import { AdminCustomerAlolineReportEntity } from "./admin-customer-aloline-report.entity/admin-customer-aloline-report.entity";
import { AdminCustomerAlolineReportService } from "./admin-customer-aloline-report.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminCustomerAlolineReportEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        AdminCustomerAlolineReportModule,
      ],
      controllers: [AdminCustomerAlolineReportController],
      providers: [AdminCustomerAlolineReportService],
      exports: [AdminCustomerAlolineReportService]
})
export class AdminCustomerAlolineReportModule {}
