import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.component.html',
  styleUrls: ['./player-modal.component.css']
})
export class PlayerModalComponent implements OnInit {

  embed;

  constructor(
    public dialogRef: MatDialogRef<PlayerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public url: string,
    private embedSvc: EmbedVideoService
  ) { }

  ngOnInit() {
    this.embed = this.embedSvc.embed(this.url); // 'https://www.youtube.com/embed/FQ2phsB7_Ic';
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
