import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { User, firestore } from 'firebase';
import { UserService } from './user.service';
import { IMessage } from 'src/entities/MessageEntity';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: Observable<IMessage[]>;
  messageFormControl = new FormControl();
  user: User;

  constructor(userService: UserService, private messageService: MessageService) {
    userService.getCurrentUser().then(user => this.user = user);
    this.messages = messageService.getMessages();
  }

  onSubmit() {
    const newMessage: IMessage = {
      content: this.messageFormControl.value,
      date: firestore.Timestamp.now(),
      uid: this.user.uid
    };

    this.messageService.sendMessage(newMessage).finally(() => {
      this.messageFormControl.setValue('');
    });
  }

  classFor(message: IMessage) {
    return {
      right: message.uid === this.user.uid,
      left: message.uid !== this.user.uid,
    };
  }
}
