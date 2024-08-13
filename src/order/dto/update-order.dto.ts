
import { IsEnum, IsNotEmpty } from "class-validator";
import { OrderStatus } from "src/common/dto/filters-order.dto";



export class UpdateOrderDto  {
  @IsNotEmpty({ message: 'El estado del pedido no puede estar vacío' })
  @IsEnum(OrderStatus, { message:  `El estado del pedido debe ser un valor válido ${Object.values(OrderStatus)}` })
  status: OrderStatus
}
