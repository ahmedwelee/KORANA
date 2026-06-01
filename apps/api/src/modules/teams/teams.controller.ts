import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { InviteStatus } from '@prisma/client';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(
    @Body()
    body: {
      name: string;
      cityId: string;
      captainId: string;
      description?: string;
    },
  ) {
    return this.teamsService.create(body);
  }

  @Post('invites')
  invite(
    @Body()
    body: {
      teamId: string;
      invitedUserId: string;
      invitedById: string;
    },
  ) {
    return this.teamsService.invite(body);
  }

  @Patch('invites/:id')
  respondInvite(
    @Param('id') id: string,
    @Body() body: { status: InviteStatus },
  ) {
    return this.teamsService.respondInvite(id, body.status);
  }

  @Patch(':teamId/members/:userId/promote-co-captain')
  promote(@Param('teamId') teamId: string, @Param('userId') userId: string) {
    return this.teamsService.promoteCoCaptain(teamId, userId);
  }

  @Get()
  listByCity(@Query('cityId') cityId: string) {
    return this.teamsService.listByCity(cityId);
  }
}
