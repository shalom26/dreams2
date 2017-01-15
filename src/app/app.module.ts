import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {YoutubeService} from "./youtube.service";
import {Safe} from "./safe.pipe";
import {VideoComponent} from "./video/video.component";

import { ModalModule } from 'ng2-bootstrap/modal';
import { RecordModalComponent } from './record-modal/record-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    Safe,
    VideoComponent,
    RecordModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
