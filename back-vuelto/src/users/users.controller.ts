import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(){
    return this.userService.usersFind()
  }

  @Post()
  createUser(@Body() data: any){
    return this.userService.CreateUser(data);
  }
}
