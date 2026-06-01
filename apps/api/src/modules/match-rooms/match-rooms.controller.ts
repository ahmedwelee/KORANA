import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MatchRoomsService } from './match-rooms.service';

@Controller('match-rooms')
export class MatchRoomsController {
  constructor(private readonly matchRoomsService: MatchRoomsService) {}

  @Post('from-challenge/:challengeId')
  createFromChallenge(
    @Param('challengeId') challengeId: string,
    @Body() body: { matchEndTime: Date },
  ) {
    return this.matchRoomsService.createFromAcceptedChallenge(
      challengeId,
      new Date(body.matchEndTime),
    );
  }

  @Post(':roomId/messages')
  postMessage(
    @Param('roomId') roomId: string,
    @Body() body: { senderId: string; content: string },
  ) {
    return this.matchRoomsService.postMessage(
      roomId,
      body.senderId,
      body.content,
    );
  }

  @Get(':roomId/messages')
  listMessages(@Param('roomId') roomId: string) {
    return this.matchRoomsService.listMessages(roomId);
  }
}
