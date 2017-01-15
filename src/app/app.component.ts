import { Component } from '@angular/core';
import {YoutubeService} from "./youtube.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data;
  unsafeUrl;
  private isOpen:boolean = false;


  constructor(private youtubeService:YoutubeService) {

  }

  ngOnInit() {
    this.youtubeService.getData()
      .subscribe((data) => {
        this.data = data.items;
        console.log('data', this.data)
      });

  }

  makeSafeUrl(id) {
    this.unsafeUrl = 'https://www.youtube.com/embed/' + id +'?rel=0&amp;controls=0&amp;showinfo=0';
    return this.unsafeUrl
  }

}
