import { Injectable } from "@nestjs/common";


@Injectable()
export class ImageService{
    getImage(){

    }
    
    postImage(payload){
     return {
        image:payload
     }   
    }
}