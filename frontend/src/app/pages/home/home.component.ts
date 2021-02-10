import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private chatService: MessageService, private router: Router) { }

  ngOnInit(): void {
    console.log("testt");
  }

  createNewChat() {
    this.chatService.createChat('testing').subscribe((response: any) => {
      
      console.log("testt");
      console.log(response["_id"]);
      this.router.navigate(['/chat', response["_id"]]);
      
    })
  }

}
