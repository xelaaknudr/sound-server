import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//clear code

const start = async () => {
  console.log('1234');
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT, () => {
      console.log(`server started on ${PORT}`);
    });
  } catch (e) {}
};

start();
