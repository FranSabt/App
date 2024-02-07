import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async usersFind(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async CreateUser(newUser: any) {
    return await this.prisma.user.create({
      data: {
        email: newUser.email ? newUser.email : 'no email',
        username: newUser.username,
        first_name: newUser.first_name,
        password: newUser.password,
        second_name: newUser.second_name ? newUser.second_name : '--------',
        last_name: newUser.last_name,
        celphone: newUser.celphone ? newUser.celphone : 'no celphone',
        is_admin: newUser.is_admin,
      },
    });

    // TODO: encriptar claves
  }
}
