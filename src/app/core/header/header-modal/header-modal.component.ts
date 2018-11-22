import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Video } from '@app/core/models/video';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})

export class HeaderModalComponent implements OnInit {

  get f() { return this.videoForm.controls; }

  videoForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<HeaderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(
        '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'
      )]],
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addVideo() {

  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
