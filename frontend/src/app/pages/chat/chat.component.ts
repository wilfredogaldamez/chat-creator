import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: MessageService) { }

  ngOnInit(): void {
  }

  addMessageToChat() {
    this.chatService.createChat('testing').subscribe((response: any) => {
      console.log(response["_id"]);

    })
  }

}
