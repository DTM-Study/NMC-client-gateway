import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from 'src/common/dto/create-order.dto';


export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  id: number;
}
