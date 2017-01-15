import {Injectable} from '@angular/core';
import {youtubeUrl} from './shared/constants';
import {Http} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  constructor(private http:Http) {
  }

  getData() {
    return this.http.get(youtubeUrl)
      .map(r =>(r).json())
      // .do(res => console.log('res',res))
  }
}
