import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReportStatus } from '@prisma/client';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  create(
    @Body()
    body: {
      reason: string;
      details?: string;
      targetUserId?: string;
      targetTeamId?: string;
      cityId?: string;
      createdById: string;
    },
  ) {
    return this.reportsService.create(body);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: ReportStatus; resolvedById?: string },
  ) {
    return this.reportsService.updateStatus(id, body.status, body.resolvedById);
  }

  @Get()
  list(@Query('cityId') cityId?: string) {
    return this.reportsService.list(cityId);
  }
}
