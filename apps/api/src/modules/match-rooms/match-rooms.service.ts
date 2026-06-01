import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ChallengeStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MatchRoomsService {
  constructor(private readonly prisma: PrismaService) {}

  async createFromAcceptedChallenge(challengeId: string, matchEndTime: Date) {
    const endsAt = new Date(matchEndTime.getTime() + 12 * 60 * 60 * 1000);

    await this.prisma.challenge.update({
      where: { id: challengeId },
      data: { status: ChallengeStatus.MATCH_ROOM_CREATED },
    });

    return this.prisma.matchRoom.upsert({
      where: { challengeId },
      update: { endsAt },
      create: { challengeId, endsAt },
    });
  }

  postMessage(roomId: string, senderId: string, content: string) {
    return this.prisma.message.create({ data: { roomId, senderId, content } });
  }

  listMessages(roomId: string) {
    return this.prisma.message.findMany({
      where: { roomId },
      orderBy: { createdAt: 'asc' },
    });
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async removeExpiredRooms() {
    await this.prisma.matchRoom.deleteMany({
      where: { endsAt: { lt: new Date() } },
    });
  }
}
