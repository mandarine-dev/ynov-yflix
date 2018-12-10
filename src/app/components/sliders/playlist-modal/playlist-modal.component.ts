import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Playlist } from '../playlist.model';
import { SlidersService } from '../sliders.service';

@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.component.html',
  styleUrls: ['./playlist-modal.component.css']
})
export class PlaylistModalComponent implements OnInit {

  playlistForm: FormGroup;

  get fm() { return this.playlistForm.controls; }

  constructor(
    public dialogRef: MatDialogRef<PlaylistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Playlist,
    private formBuilder: FormBuilder,
    private sliderSvc: SlidersService,
  ) { }

  ngOnInit() {
    this.playlistForm = this.formBuilder.group({
      french_name: ['', Validators.required],
      english_name: ['', Validators.required],
      spanish_name: ['', Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  deleteVideo() {
    this.sliderSvc.deletePlaylist(this.data.name);
    this.dialogRef.close();
  }

}
