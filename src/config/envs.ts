import 'dotenv/config';
import *  as joi from 'joi'
interface EnvsVars {
    PORT: number;
    PRODUCTS_MICROSERVICE_PORT : number;
    PRODUCTS_MICROSERVICE_HOST : string;
} 

const envSchema = joi.object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(), 
}).unknown(true);
;

const { error, value } = envSchema.validate(process.env);

if(error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const envs: EnvsVars = { 
    PORT: value.PORT,
    PRODUCTS_MICROSERVICE_HOST: value.PRODUCTS_MICROSERVICE_HOST,
    PRODUCTS_MICROSERVICE_PORT: value.PRODUCTS_MICROSERVICE_PORT,
};