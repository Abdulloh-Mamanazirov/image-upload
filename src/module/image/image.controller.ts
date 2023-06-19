import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { Controller, Post, Get } from '@nestjs/common';
import { Body, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

export const storage = {
  storage: diskStorage({
    destination: './uploads',
    filename: (_, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();

      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('image')
export class ImageController {
  constructor(private readonly service: ImageService) {
    this.service = service;
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', storage))
  async createCompany(@UploadedFile() file): Promise<any> {    
    return await this.service.postImage(file);
  }

  @Get()
  async getImage() {
    return '"Get" request is not working';
  }
}
