import { Module } from '@nestjs/common';
import { TasaBcvController } from './tasa-bcv.controller';
import { TasaBcvService } from './tasa-bcv.service';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TasaBcvController],
  providers: [TasaBcvService, PrismaService],
})
export class TasaBcvModule {}
