import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chat } from 'src/app/models/chat.model';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: MessageService, private route: ActivatedRoute, private router: Router) { }

  chatId?: string;
  chats?: Chat[];
  messages?: Message[];


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.chatId) {
          console.log("params listed")
          this.chatId = params.chatId;
          this.chatService.getMessages(params.chatId).subscribe((messages: any) => {
            this.messages = messages;
            console.log(this.messages)
          })
        } else {
          this.messages = undefined;
        }
      }
    )
    
  }

  addMessageToChat() {
    this.chatService.createChat('testing').subscribe((response: any) => {
      console.log(response["_id"]);

    })
  }



  createMessage(title: string) {
    if (typeof this.chatId === "string") {
      this.chatService.createMessage(title, this.chatId, true).subscribe((newMessage: any) => {
        console.log("added message to chat");
        this.ngOnInit();
      })
  }
  }

}
