import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { InviteStatus } from '@prisma/client';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post('requests')
  sendRequest(@Body() body: { senderId: string; receiverId: string }) {
    return this.friendsService.sendRequest(body.senderId, body.receiverId);
  }

  @Patch('requests/:id')
  respond(@Param('id') id: string, @Body() body: { status: InviteStatus }) {
    return this.friendsService.respondRequest(id, body.status);
  }

  @Get('requests')
  list(@Query('userId') userId: string) {
    return this.friendsService.list(userId);
  }
}
