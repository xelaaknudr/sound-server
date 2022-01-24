import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//MAIN
//2323432432
//new functionality
//clear code

const start = async () => {
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
