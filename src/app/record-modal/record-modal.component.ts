import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-record-modal',
  template: `
<button class="btn btn-primary" (click)="lgModal.show()">Large modal</button>
<div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title pull-left">Spread Your Dreams</h4>
        <button type="button" class="close pull-right" (click)="lgModal.hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div>
          <video #video width="640" height="480" autoplay></video>
         </div>
      </div>
    </div>
  </div>
</div>
`,

  styleUrls: ['./record-modal.component.css']
})
export class RecordModalComponent implements OnInit ,AfterViewInit {

  @ViewChild('video') video: any;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let _video = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
          _video.src = window.URL.createObjectURL(stream);
          _video.play();
        })
    }

  }
}
