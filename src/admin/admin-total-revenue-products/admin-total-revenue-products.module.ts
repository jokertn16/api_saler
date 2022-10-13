import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminTotalRevenueProductsController } from "./admin-total-revenue-products.controller";
import { AdminTotalRevenueProductsDataModelEntity } from "./admin-total-revenue-products.entity/admin-total-revenue-products.entity";
import { AdminTotalRevenueProductsService } from "./admin-total-revenue-products.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminTotalRevenueProductsDataModelEntity]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    AdminTotalRevenueProductsModule,
  ],
  controllers: [AdminTotalRevenueProductsController],
  providers: [AdminTotalRevenueProductsService],
  exports: [AdminTotalRevenueProductsService],
})
export class AdminTotalRevenueProductsModule {}
