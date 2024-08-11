import { Type } from "class-transformer";
import { IsString , IsNotEmpty, IsNumber, min, Min } from "class-validator";


export class CreateProductDto {
    @IsString({
        message: 'El nombre del producto es un texto'
    })
    @IsNotEmpty({
        message: 'El nombre del producto es obligatorio'
    })
    public name: string;
    @IsNumber({
        maxDecimalPlaces:4
    }, {
        message: 'El precio del producto es un número'
    })
    @IsNotEmpty({
        message: 'El precio del producto es obligatorio'
    })
    @Min(0, {
        message: 'El precio del producto debe ser mayor o igual a 0'
    })
    
    @Type(() => Number)
    public price: number;
}

