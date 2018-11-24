import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})

export class HighlightComponent implements OnInit {

  video_muted = false;
  iframe_html: any;
  youtubeUrl = 'https://www.youtube.com/watch?v=HxtLlByaYTc';

  @ViewChild('test', { read: ElementRef }) public video: ElementRef<any>;

  constructor(private embedSvc: EmbedVideoService) {
    // tslint:disable-next-line:max-line-length
    this.iframe_html = this.embedSvc.embed(this.youtubeUrl, {
      query: {
        modestbranding: 1,
        showinfo: 0,
        autoplay: 1,
        vq: 'highres',
        disablekb: 1,
        loop: 1,
        controls: 0
      },
      attr: {
        width: '100%',
        height: '100%',
        allow: 'autoplay'
      }
    });
    // modestbranding=1&showinfo=0&autoplay=1&vq=highres&disablekb=1&loop=1&rel=0&controls=0
  }

  ngOnInit() {
  }

  mute() {
    this.video.nativeElement.volume = 0;
  }

}
