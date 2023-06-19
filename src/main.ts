import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { appConfig } from 'configs';
import {join} from 'path';
import { App } from './app';

setImmediate(async ()=>{
  const app = await NestFactory.create<NestExpressApplication>(App);
  app.useStaticAssets(join(__dirname, '../uploads'));
  await app.listen(appConfig.port);
})
