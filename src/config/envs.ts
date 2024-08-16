import 'dotenv/config';
import *  as joi from 'joi'
interface EnvsVars {
    PORT: number;
    NATS_HOSTS: string[];
}

const envSchema = joi.object({
    PORT: joi.number().required(),
    NATS_HOSTS: joi.array().items(joi.string()).required(),
}).unknown(true);
;

const { error, value } = envSchema.validate({
    ...process.env,
    NATS_HOSTS: process.env.NATS_HOSTS.split(',')
});

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const envs: EnvsVars = {
    PORT: value.PORT,
    NATS_HOSTS: value.NATS_HOSTS
};