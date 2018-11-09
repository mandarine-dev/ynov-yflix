import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})

export class HighlightComponent implements OnInit {

  video_muted = false;

  @ViewChild('test', { read: ElementRef }) public video: ElementRef<any>;


  constructor() { }

  ngOnInit() {
  }

  mute() {
    this.video.nativeElement.volume = 0;
  }

}
