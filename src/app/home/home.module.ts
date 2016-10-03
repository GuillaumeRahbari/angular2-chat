import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameComponent } from './name/name.component';
import { ChatComponent } from './chat/chat.component';
@NgModule({
  imports:      [ SharedModule ],
  declarations: [ HomeComponent, NameComponent, ChatComponent ]
})
export class HomeModule { }
