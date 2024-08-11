import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, Observable } from 'rxjs';
import { PaginationDto } from 'src/common';
import { CreateProductDto } from 'src/common/dto/create-product.dto';
import { UpdateProductDto } from 'src/common/dto/update-product.dto';
import { PRODUCTS_SERVICE } from 'src/config';


@Controller('products')
export class ProductsController {
    constructor(
        @Inject(PRODUCTS_SERVICE) private readonly productsClient: ClientProxy
    ) { }

    @Post()
    createProduct(@Body() body: CreateProductDto) {
        return this.productsClient.send({cmd:'create_product'} , body).pipe(
            catchError((err) => {
                throw new RpcException(err);
            }),
        )
    }

    @Get()
    findAllProducts(@Query() paginationDto: PaginationDto): Observable<any> {
        return this.productsClient.send({ cmd: 'find_all_products' }, paginationDto)
            .pipe(
                catchError(err => { throw new RpcException(err) })
            )
            ;
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productsClient.send({ cmd: 'find_product_by_id' }, { id }).pipe(
            catchError((err) => {
                throw new RpcException(err);
            }),
        );
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsClient.send({cmd:'delete_product'}, { id }).pipe(
            catchError((err) => {
                throw new RpcException(err);
            }),
        );
    }

    @Patch(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDto) {
        return this.productsClient.send({cmd:'update_product'}, { id, ...body }).pipe(
            catchError((err) => {
                throw new RpcException(err);
            }),
        )
    }

}
