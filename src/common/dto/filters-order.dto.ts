import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export enum OrderStatus {
    PENDING = 'PENDING',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
}

export class filtersOrdersDto {
    
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type(()=>Number)
    page?: number=1;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Type(()=>Number)
    limit?: number=10;

    @IsOptional()
    @IsEnum(OrderStatus , {  
        message: `Ajúste al formato de status de orden ${Object.values(OrderStatus)}`,
    })
    status?: OrderStatus = OrderStatus.PENDING;
}