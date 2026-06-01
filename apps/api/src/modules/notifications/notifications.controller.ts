import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { NotificationType, Prisma } from '@prisma/client';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(
    @Body()
    body: {
      type: NotificationType;
      receiverId: string;
      senderId?: string;
      title: string;
      body: string;
      payload?: unknown;
    },
  ) {
    return this.notificationsService.create({
      ...body,
      payload: body.payload as Prisma.InputJsonValue | undefined,
    });
  }

  @Get()
  list(@Query('receiverId') receiverId: string) {
    return this.notificationsService.list(receiverId);
  }

  @Patch(':id/read')
  markRead(@Param('id') id: string) {
    return this.notificationsService.markRead(id);
  }

  @Post('firebase/scaffold')
  firebaseScaffold(@Body() body: { receiverId: string }) {
    return this.notificationsService.firebaseScaffold(body.receiverId);
  }
}
