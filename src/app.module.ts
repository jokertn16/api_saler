import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthenticationMiddleware } from "./utils.common/utils.middleware.common/utils.bearer-token.common";

import { AdminCustomerAlolineReportModule } from "./admin/admin-customer-aloline-report/admin-customer-aloline-report.module";
import { AdminTopTenProductBestSellerDetailModule } from "./admin/admin-top-ten-product-best-seller-detail/admin-top-ten-product-best-seller-detail.module";
import { AdminGravityProductBestSellerModule } from "./admin/admin-gravity-product-best-seller/admin-gravity-product-best-seller.module";
import { AdminTotalRevenueProductsModule } from "./admin/admin-total-revenue-products/admin-total-revenue-products.module";
import { AdminAdvertisingRevenueModule } from "./admin/admin-advertising-revenue/admin-advertising-revenue.module";
import { AdminBranchReportModule } from "./admin/admin-branch-report/admin-branch-report.module";
import { AdminTopBestSalerReportModule } from "./admin/admin-top-best-saler-report/admin-top-best-saler-report.module";
import { AdminSalerDetailReportModule } from "./admin/admin-saler-detail-report/admin-saler-detail-report.module";
import { AdminBestSalerGravityReportModule } from "./admin/admin-best-saler-gravity-report/admin-best-saler-gravity-report.module";
import { AdminAdvertisingRevenueDetailModule } from "./admin/admin-advertising-revenue-detail/admin-advertising-revenue-detail.module";
import { AuthModule } from "./auth/auth.module";
import { TechresSalerModule } from './techres-saler/techres-saler.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      multipleStatements: true,
      dateStrings: true,
    }),

    MongooseModule.forRoot(
      `${process.env.DB_MONGO_CONNECTION}://${
        process.env.DB_MONGO_USERNAME
      }:${encodeURIComponent(process.env.DB_MONGO_PASSWORD)}@${
        process.env.DB_MONGO_HOST
      }:${process.env.DB_MONGO_PORT}/${process.env.DB_MONGO_NAME}`
    ),
    AuthModule,
    AdminAdvertisingRevenueModule,
    AdminCustomerAlolineReportModule,
    AdminTopTenProductBestSellerDetailModule,
    AdminGravityProductBestSellerModule,

    AdminTotalRevenueProductsModule, // 29/06
    AdminBranchReportModule,
    AdminTopBestSalerReportModule,
    AdminSalerDetailReportModule,
    AdminBestSalerGravityReportModule,
    AdminAdvertisingRevenueDetailModule,
    TechresSalerModule,
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: "/", method: RequestMethod.ALL });
  }
}
