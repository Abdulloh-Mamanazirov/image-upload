import { Injectable } from '@nestjs/common';
import { readdirSync, readFile, readFileSync, unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class ImageService {
  async getImages(): Promise<string[]> {
    return readdirSync(join(__dirname, '../../../../uploads'), {
      withFileTypes: true,
    })
      .filter((item) => !item.isDirectory())
      .map((item) => item.name);
  }

  postImage(payload) {
    return {
      image: payload,
    };
  }

  deleteImage(payload) {
    try {
      readFileSync(join(__dirname, `../../../../uploads/${payload.name}`));
    } catch (error) {
      return 'File does not exist!';
    }

    return unlink(
      join(__dirname, `../../../../uploads/${payload.name}`),
      () => {},
    );
  }
}
