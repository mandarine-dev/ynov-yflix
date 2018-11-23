import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { Playlist } from './playlist.model';
import { SlidersService } from './sliders.service';
import { VideoModalComponent } from './video-modal/video-modal.component';

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

  constructor(
    private sliderSvc: SlidersService,
    public dialog: MatDialog,
    private embedSvc: EmbedVideoService,
    private translateSvc: TranslateService
  ) { }

  // TODO: voir si on peut pas faire autre chose que chainer les appels
  ngOnInit() {
    this.sliderSvc.getPlaylists().subscribe(result => {
      this.playlists = result;
      this.playlists.forEach(playlist => {
        this.sliderSvc.getVideos(playlist.name).subscribe(videos => {
          playlist['videos'] = videos;
        });
      });
      console.log('this.playlists', this.playlists);
    });
    this.iframe_html = this.embedSvc.embed(this.youtubeUrl);
  }

  openModifyModal(item) {
    console.log('The dialog was open with item => ', item);
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '300px',
      height: '400px',
      data: item,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // const thumbnail = this.embedSvc.embed_image(result.url, { image: 'hqdefault' });
        // thumbnail.then(imageUrl => {
        //   this.video.thumbnail = imageUrl.link;
        //   this.sliderSvc.addVideo(this.video);
        // });
      }
    });
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 810), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 810), behavior: 'smooth' });
  }

  // TODO mettre en dynamique la thumbnail avec https://img.youtube.com/vi/xWtfo9kuRTU/0.jpg

}
