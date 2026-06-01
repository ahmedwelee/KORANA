import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get(':userId')
  getProfile(@Param('userId') userId: string) {
    return this.profilesService.getProfile(userId);
  }

  @Get()
  listByCity(@Query('cityId') cityId: string) {
    return this.profilesService.listByCity(cityId);
  }
}
