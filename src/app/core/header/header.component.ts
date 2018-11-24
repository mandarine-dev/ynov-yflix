import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SlidersService } from '@app/components/sliders/sliders.service';
import { EmbedVideoService } from 'ngx-embed-video';
import { Video } from '../models/video';
import { AuthentificationService } from '../services/authentification/authentification.service';
import { HeaderModalComponent } from './header-modal/header-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  entryComponents: [HeaderModalComponent]
})

export class HeaderComponent implements OnInit {

  video = new Video();

  constructor(
    public auth: AuthentificationService,
    private router: Router,
    public dialog: MatDialog,
    private embedSvc: EmbedVideoService,
    private sliderSvc: SlidersService
  ) { }

  ngOnInit() {
  }

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

  disconnect() {
    this.auth.signOut();
  }

  openModal() {
    console.log('The dialog was open');
    const dialogRef = this.dialog.open(HeaderModalComponent, {
      width: '600px',
      height: '570px',
      data: this.video,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const thumbnail = this.embedSvc.embed_image(result.url, { image: 'hqdefault' });
        thumbnail.then(imageUrl => {
          this.video.thumbnail = imageUrl.link;
          this.sliderSvc.addVideo(this.video);
        });
      }
    });
  }

  backHome() {
    this.router.navigateByUrl('/');
  }

}
