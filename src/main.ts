import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common';


async function bootstrap() {
  const logger = new Logger('Main');  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
    }
  ));


  app.useGlobalFilters(new RpcCustomExceptionFilter())


  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);

  await app.listen(envs.PORT);
  logger.log(`Client Gateway is running on ${envs.PORT} port`);
}
bootstrap();
