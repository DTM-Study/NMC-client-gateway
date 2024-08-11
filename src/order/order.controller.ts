import { Controller, Get, Post, Body, Patch, Param, Inject, ParseIntPipe } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ORDERS_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('order')
export class OrderController {
  constructor(
    @Inject(ORDERS_SERVICE) private readonly orderService: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.send('createOrder', createOrderDto).pipe(
      catchError((err)=>{
        throw new RpcException(err);  
      }),
    ) 
    ; 
  }

  @Get()
  findAll() {
    return this.orderService.send('findAllOrders', {}).pipe(
      catchError((err)=>{
        throw new RpcException(err);  
      }),
    )
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.send('findOneOrder', {id}).pipe(
      catchError((err)=>{
        throw new RpcException(err);  
      }),
    )
    
  }

  @Patch(':id')
  changeOrderStatus(@Param('id', ParseIntPipe) id: number, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.send('changeOrderStatus', {id, ...updateOrderDto}).pipe(
      catchError((err)=>{
        throw new RpcException(err);  
      }),
    )
  }

  

  
}
