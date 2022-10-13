import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminTopTenProductBestSellerDetailController } from "./admin-top-ten-product-best-seller-detail.controller";
import { AdminTopTenProductBestSellerDetailDataModelEntity } from "./admin-top-ten-product-best-seller-detail.entity/admin-top-ten-product-best-seller-detail-data-model.entity";
import { AdminTopTenProductBestSellerDetailService } from "./admin-top-ten-product-best-seller-detail.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AdminTopTenProductBestSellerDetailDataModelEntity,
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    AdminTopTenProductBestSellerDetailModule,
  ],
  controllers: [AdminTopTenProductBestSellerDetailController],
  providers: [AdminTopTenProductBestSellerDetailService],
  exports: [AdminTopTenProductBestSellerDetailService],
})
export class AdminTopTenProductBestSellerDetailModule {}
