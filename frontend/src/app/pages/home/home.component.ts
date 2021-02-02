import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private chatService: MessageService) { }

  ngOnInit(): void {
  }

  createNewChat() {
    this.chatService.createChat('testing').subscribe((response: any) => {
      console.log(response);
    })
  }

}
