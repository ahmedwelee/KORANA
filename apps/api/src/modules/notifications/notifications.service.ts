import { Injectable } from '@nestjs/common';
import { NotificationType, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    type: NotificationType;
    receiverId: string;
    senderId?: string;
    title: string;
    body: string;
    payload?: Prisma.InputJsonValue;
  }) {
    return this.prisma.notification.create({ data });
  }

  list(receiverId: string) {
    return this.prisma.notification.findMany({
      where: { receiverId },
      orderBy: { createdAt: 'desc' },
    });
  }

  markRead(id: string) {
    return this.prisma.notification.update({
      where: { id },
      data: { readAt: new Date() },
    });
  }

  firebaseScaffold(receiverId: string) {
    return { status: 'stub', provider: 'firebase', receiverId };
  }
}
