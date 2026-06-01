import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDto) {
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: dto.password ? `plain:${dto.password}` : null,
        name: dto.name,
        age: dto.age,
        cityId: dto.cityId,
        position: dto.position,
        skillLevel: dto.skillLevel,
      },
    });

    return this.issueToken(user.id, user.role);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.issueToken(user.id, user.role);
  }

  oauthScaffold(provider: 'google' | 'apple') {
    return { message: `${provider} OAuth scaffold ready`, status: 'stub' };
  }

  phoneVerificationScaffold(phone: string) {
    return { message: 'Phone verification scaffold ready', phone };
  }

  private issueToken(sub: string, role: UserRole) {
    return {
      accessToken: this.jwtService.sign({ sub, role }),
      tokenType: 'Bearer',
    };
  }
}
