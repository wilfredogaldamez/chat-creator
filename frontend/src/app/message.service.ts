import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private webReqService:  WebRequestService) { }

  createChat(title: string){
    //we want to send a web request to create a chat
    return this.webReqService.post('chats', { title });
  }
}
