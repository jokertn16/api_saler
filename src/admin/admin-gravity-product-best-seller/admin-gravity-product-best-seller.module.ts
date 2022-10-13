import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminGravityProductBestSellerController } from "./admin-gravity-product-best-seller.controller";
import { AdminGravityProductBestSellerDataModelEntity } from "./admin-gravity-product-best-seller.entity/admin-gravity-product-best-seller.entity";
import { AdminGravityProductBestSellerService } from "./admin-gravity-product-best-seller.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminGravityProductBestSellerDataModelEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    AdminGravityProductBestSellerModule,
  ],
  controllers: [AdminGravityProductBestSellerController],
  providers: [AdminGravityProductBestSellerService],
  exports: [AdminGravityProductBestSellerService],
})
export class AdminGravityProductBestSellerModule {}
