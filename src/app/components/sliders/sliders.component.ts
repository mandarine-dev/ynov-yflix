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
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  @ViewChild('tilesContainer', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  playlists: Playlist[];

  constructor(
    private sliderSvc: SlidersService,
    public dialog: MatDialog,
    public translateSvc: TranslateService,
    private authSvc: AuthentificationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sliderSvc.getPlaylists().subscribe(result => {
      this.playlists = result;
      this.playlists.forEach(playlist => {
        this.sliderSvc.getVideos(playlist.name).subscribe(videos => {
          playlist['videos'] = videos;
        });
      });
    });
  }

  openVideoModifyModal(item: Video) {
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
    this.dialog.open(PlayerModalComponent, {
      width: '600px',
      height: '370px',
      data: url,
      disableClose: false
    });
  }

  addUserStatistic(category) {
    // this.authSvc.user
    this.sliderSvc.addViewToUserStatistics(category, this.authSvc.user.uid, this.route.snapshot.params['id']);
    console.log('category', category);
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 810), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 810), behavior: 'smooth' });
  }

}
