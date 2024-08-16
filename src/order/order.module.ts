import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVICE,  } from 'src/config';



@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          urls: envs.NATS_HOSTS,
        },
      },
    ]),
  ],  
  controllers: [OrderController],
})
export class OrderModule {}
