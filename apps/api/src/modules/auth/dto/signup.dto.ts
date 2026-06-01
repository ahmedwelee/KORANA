import { Position, SkillLevel } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsString()
  name!: string;

  @IsInt()
  @Min(10)
  age!: number;

  @IsString()
  cityId!: string;

  @IsEnum(Position)
  position!: Position;

  @IsEnum(SkillLevel)
  skillLevel!: SkillLevel;
}
