import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { TasaBcvModule } from './tasa-bcv/tasa-bcv.module';

@Module({
  imports: [UsersModule, TasaBcvModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
