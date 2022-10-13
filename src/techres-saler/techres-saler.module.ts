import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TechresSalerController } from './techres-saler.controller';
import { TechresSalerService } from './techres-saler.service';
import { TechresSaler } from './techres-saler.entity/techres-saler.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([TechresSaler]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_TOKEN,
    }),
    TechresSalerModule,
  ],
  controllers: [TechresSalerController],
  providers: [TechresSalerService],
  exports: [TechresSalerService]
})
export class TechresSalerModule {}
