import { Injectable } from '@nestjs/common';
import { ChallengeStatus, InviteStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChallengesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    title: string;
    cityId: string;
    date: Date;
    timeLabel: string;
    format: 'FIVE_V_FIVE' | 'SIX_V_SIX' | 'SEVEN_V_SEVEN';
    visibility: 'PUBLIC' | 'PRIVATE';
    notes?: string;
    creatorTeamId: string;
  }) {
    return this.prisma.challenge.create({ data });
  }

  listByCity(cityId: string) {
    return this.prisma.challenge.findMany({
      where: { cityId },
      include: { creatorTeam: true, requests: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  requestMatch(data: {
    challengeId: string;
    teamId: string;
    message?: string;
    createdById: string;
  }) {
    return this.prisma.challengeRequest.create({
      data,
    });
  }

  async acceptTeam(challengeId: string, requestId: string) {
    const request = await this.prisma.challengeRequest.update({
      where: { id: requestId },
      data: { status: InviteStatus.ACCEPTED },
    });

    return this.prisma.challenge.update({
      where: { id: challengeId },
      data: {
        acceptedTeamId: request.teamId,
        status: ChallengeStatus.ACCEPTED,
      },
    });
  }

  updateStatus(challengeId: string, status: ChallengeStatus) {
    return this.prisma.challenge.update({
      where: { id: challengeId },
      data: { status },
    });
  }
}
