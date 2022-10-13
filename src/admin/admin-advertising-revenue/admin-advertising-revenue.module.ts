import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminAdvertisingRevenueController } from "./admin-advertising-revenue.controller";
import { AdminAdvertisingRevenueEntity } from "./admin-advertising-revenue.entity/admin-advertising-revenue.entity";
import { AdminAdvertisingRevenueService } from "./admin-advertising-revenue.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminAdvertisingRevenueEntity]),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
          secret: process.env.SECRET_TOKEN,
        }),
        AdminAdvertisingRevenueModule,
      ],
      controllers: [AdminAdvertisingRevenueController],
      providers: [AdminAdvertisingRevenueService],
      exports: [AdminAdvertisingRevenueService]
})
export class AdminAdvertisingRevenueModule {}