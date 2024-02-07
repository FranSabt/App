import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasaBcvService {
  constructor(private readonly prisma: PrismaService) {}

  async CreateTasa(data: any) {
    const { tasa, userID} = data;
    try {
      const newTasa = this.prisma.tasaBcv.create({
        data: {
          tasa: tasa,
          user: {
            connect: {
              id: userID, // reemplaza esto con el ID del usuario
            },
          },
        },
      });
      return newTasa;
    } catch (err: any) {
      console.log(err);
    }
  }

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  async GetTasaLast() {
    try {
      const tasa = this.prisma.tasaBcv.findFirst({
        orderBy: {
          date: 'desc',
        },
      });
      return tasa;
    } catch (err) {
      console.log(err);
    }
  }

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

  async GetAllTasa() {
    try {
      const tasas = this.prisma.tasaBcv.findMany();
      return tasas;
    } catch (err) {
      console.log(err);
    }
  }
}
