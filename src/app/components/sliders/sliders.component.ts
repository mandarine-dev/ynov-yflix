import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmbedVideoService } from 'ngx-embed-video';
import { Playlist } from './playlist.model';
import { SlidersService } from './sliders.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  iframe_html: any;
  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';

  @ViewChild('tilesContainer', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  playlists: Playlist[];

  constructor(private sliderSvc: SlidersService, public dialog: MatDialog, private embedSvc: EmbedVideoService) { }

  // TODO: voir si on peut pas faire autre chose que chainer les appels
  ngOnInit() {
    this.sliderSvc.getPlaylists().subscribe(result => {
      this.playlists = result;
      this.playlists.forEach(playlist => {
        this.sliderSvc.getVideos(playlist.name).subscribe(videos => {
          playlist['videos'] = videos;
        });
      });
    });

    this.iframe_html = this.embedSvc.embed(this.youtubeUrl);
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 810), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 810), behavior: 'smooth' });
  }

  // TODO mettre en dynamique la thumbnail avec https://img.youtube.com/vi/xWtfo9kuRTU/0.jpg

}
