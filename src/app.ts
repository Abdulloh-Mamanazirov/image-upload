import { Module } from '@nestjs/common';
import { ImageController, ImageModule, ImageService } from './module';

@Module({
  imports: [ImageModule],
  controllers: [ImageController],
  providers: [ImageService],
})
export class App {}
