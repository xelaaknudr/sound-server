import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

console.log('232424242');
console.log('123123123131');
console.log('232342423');
const obj = {};
const arr = []
console.log()

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/local'),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
console.log('form maerge brunch')
