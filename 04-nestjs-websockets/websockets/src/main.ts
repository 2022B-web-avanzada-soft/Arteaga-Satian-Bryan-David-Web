import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //SE cambia el puerto para que no se confunda con el puerto del nextjs.
  await app.listen(11201);
}
bootstrap();
