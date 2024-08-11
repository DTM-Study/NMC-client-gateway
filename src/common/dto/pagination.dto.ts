import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
    @IsPositive({
        message: 'El número de página debe ser positivo'    
    })
    @IsOptional()
    @Type(() => Number)
    page?: number=1;
    
    @IsPositive({
        message: 'El número de página debe ser positivo'    
    })
    @IsOptional()
    @Type(() => Number)
    limit?: number=10;
}
