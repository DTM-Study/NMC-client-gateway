import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ORDERS_SERVICE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ORDERS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.ORDERS_MICROSERVICE_HOST,
          port: envs.ORDERS_MICROSERVICE_PORT
        },
      },
    ]),
  ],  
  controllers: [OrderController],
})
export class OrderModule {}
