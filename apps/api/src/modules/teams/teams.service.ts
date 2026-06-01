import { Injectable } from '@nestjs/common';
import { InviteStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    name: string;
    cityId: string;
    captainId: string;
    description?: string;
  }) {
    return this.prisma.team.create({ data });
  }

  invite(data: { teamId: string; invitedUserId: string; invitedById: string }) {
    return this.prisma.teamInvite.create({ data });
  }

  respondInvite(id: string, status: InviteStatus) {
    return this.prisma.teamInvite.update({ where: { id }, data: { status } });
  }

  listByCity(cityId: string) {
    return this.prisma.team.findMany({
      where: { cityId },
      include: { members: true },
    });
  }

  promoteCoCaptain(teamId: string, userId: string) {
    return this.prisma.teamMember.update({
      where: { teamId_userId: { teamId, userId } },
      data: { isCoCaptain: true },
    });
  }
}
