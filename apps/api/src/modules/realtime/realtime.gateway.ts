import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: 'match-room', cors: true })
export class RealtimeGateway {
  @WebSocketServer()
  server!: Server;

  @SubscribeMessage('room:join')
  handleJoin(@MessageBody() payload: { roomId: string; userId: string }) {
    this.server.to(payload.roomId).emit('room:presence', payload);
    return payload;
  }

  @SubscribeMessage('room:message')
  handleMessage(
    @MessageBody()
    payload: {
      roomId: string;
      senderId: string;
      content: string;
    },
  ) {
    this.server.to(payload.roomId).emit('room:message', payload);
    return payload;
  }
}
