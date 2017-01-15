import {Component, OnInit, Input} from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {Safe} from '../safe.pipe';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.css'],
  providers: [YoutubeService],
})
export class VideoComponent implements OnInit {
  @Input() url:string;

  constructor(private youtubeService:YoutubeService, ) {

  }

  ngOnInit() {

  }

  static onClick(event) {
    console.log('event', event);
  }

}
