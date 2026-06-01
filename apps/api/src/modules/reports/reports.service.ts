import { Injectable } from '@nestjs/common';
import { ReportStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    reason: string;
    details?: string;
    targetUserId?: string;
    targetTeamId?: string;
    cityId?: string;
    createdById: string;
  }) {
    return this.prisma.report.create({ data });
  }

  updateStatus(id: string, status: ReportStatus, resolvedById?: string) {
    return this.prisma.report.update({
      where: { id },
      data: {
        status,
        resolvedById:
          status === ReportStatus.RESOLVED ? resolvedById : undefined,
      },
    });
  }

  list(cityId?: string) {
    return this.prisma.report.findMany({
      where: cityId ? { cityId } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }
}
