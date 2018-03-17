import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';

@NgModule({
  imports: [SharedModule],
  declarations: [ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
