import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateOrderDto {
    @IsNumber({},{message: 'Total amount must be a number'})
    @IsNotEmpty({message: 'Total amount is required'})
    @Type(() => Number)
    totalAmount: number;

    @IsNumber({},{message: 'Total items must be a number'})
    @IsNotEmpty({message: 'Total items is required'})
    @Type(() => Number)
    totalItems: number;
}
