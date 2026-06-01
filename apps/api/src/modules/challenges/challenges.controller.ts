import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ChallengeStatus } from '@prisma/client';
import { ChallengesService } from './challenges.service';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Post()
  create(
    @Body()
    body: {
      title: string;
      cityId: string;
      date: Date;
      timeLabel: string;
      format: 'FIVE_V_FIVE' | 'SIX_V_SIX' | 'SEVEN_V_SEVEN';
      visibility: 'PUBLIC' | 'PRIVATE';
      notes?: string;
      creatorTeamId: string;
    },
  ) {
    return this.challengesService.create(body);
  }

  @Get()
  listByCity(@Query('cityId') cityId: string) {
    return this.challengesService.listByCity(cityId);
  }

  @Post('requests')
  requestMatch(
    @Body()
    body: {
      challengeId: string;
      teamId: string;
      message?: string;
      createdById: string;
    },
  ) {
    return this.challengesService.requestMatch(body);
  }

  @Patch(':challengeId/requests/:requestId/accept')
  acceptTeam(
    @Param('challengeId') challengeId: string,
    @Param('requestId') requestId: string,
  ) {
    return this.challengesService.acceptTeam(challengeId, requestId);
  }

  @Patch(':challengeId/status')
  updateStatus(
    @Param('challengeId') challengeId: string,
    @Body() body: { status: ChallengeStatus },
  ) {
    return this.challengesService.updateStatus(challengeId, body.status);
  }
}
