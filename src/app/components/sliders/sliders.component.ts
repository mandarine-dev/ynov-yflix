import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Video } from '@app/core/models/video';
import { TranslateService } from '@ngx-translate/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { PlayerModalComponent } from './player-modal/player-modal.component';
import { PlaylistModalComponent } from './playlist-modal/playlist-modal.component';
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
      console.log('playlists ? ', result);
      this.playlists = result;
      this.playlists.forEach(playlist => {
        this.sliderSvc.getVideos(playlist.name).subscribe(videos => {
          playlist['videos'] = videos;
        });
      });
    });
    this.iframe_html = this.embedSvc.embed(this.youtubeUrl);
  }

  openVideoModifyModal(item: Video) {
    console.log('modal video ', item);
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '600px',
      height: '210px',
      data: item,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(title => {
      if (title) {
        this.sliderSvc.editTitleVideo(item.category, item.id, title);
      }
    });
  }

  openPlaylistModifyModal(playlist: Playlist) {
    console.log('modal video ', playlist);
    const dialogRef = this.dialog.open(PlaylistModalComponent, {
      width: '600px',
      height: '370px',
      data: playlist,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.sliderSvc.editPlaylistTraductions(playlist.name, data);
      }
    });
  }

  openPlayerModal(url: string) {
    console.log('url video ', url);
    const dialogRef = this.dialog.open(PlayerModalComponent, {
      width: '600px',
      height: '370px',
      data: url,
      disableClose: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        // this.sliderSvc.editPlaylistTraductions(playlist.name, data);
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
