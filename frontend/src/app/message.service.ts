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

  getMessages(chatId: string) {
    return this.webReqService.get(`chats/${chatId}/`);
  }

  createMessage(title: string, chatId: string, leftside: boolean) {
    // We want to send a web request to create a message
    return this.webReqService.post(`chats/${chatId}/`, { title, leftside });
  }


}
