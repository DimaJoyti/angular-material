import { Injectable } from "@angular/core";
import { ApiAiClient } from "api-ai-javascript";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

// Message class for displaying messages in the component
export class Message {
  constructor(
    public content: string, 
    public sentBy: string
  ) {}
}

@Injectable()
export class ChatService {
  // readonly token = environment.dialogflow.angularBot;
  // readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {}

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}
