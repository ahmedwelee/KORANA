import { Injectable } from '@nestjs/common';
import { InviteStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FriendsService {
  constructor(private readonly prisma: PrismaService) {}

  sendRequest(senderId: string, receiverId: string) {
    return this.prisma.friendRequest.create({
      data: { senderId, receiverId },
    });
  }

  respondRequest(id: string, status: InviteStatus) {
    return this.prisma.friendRequest.update({
      where: { id },
      data: { status },
    });
  }

  list(userId: string) {
    return this.prisma.friendRequest.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
