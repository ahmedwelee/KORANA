import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RatingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    sourceTeamId: string;
    targetTeamId: string;
    challengeId: string;
    stars: number;
    fairPlay: number;
    punctuality: number;
    competitiveLevel: number;
    comment?: string;
    createdById: string;
  }) {
    const rating = await this.prisma.rating.create({ data });

    const aggregate = await this.prisma.rating.aggregate({
      where: { targetTeamId: data.targetTeamId },
      _avg: { stars: true },
    });

    await this.prisma.team.update({
      where: { id: data.targetTeamId },
      data: { rating: aggregate._avg.stars ?? 0 },
    });

    return rating;
  }
}
