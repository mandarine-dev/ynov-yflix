import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Video } from '@app/core/models/video';
import { SlidersService } from '../sliders.service';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {

  videoForm: FormGroup;

  get fm() { return this.videoForm.controls; }

  constructor(
    public dialogRef: MatDialogRef<VideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video,
    private formBuilder: FormBuilder,
    private sliderSvc: SlidersService,
  ) { }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(60)]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  deleteVideo() {
    this.sliderSvc.deleteVideo(this.data.category, this.data.id);
    this.dialogRef.close();
  }

}
