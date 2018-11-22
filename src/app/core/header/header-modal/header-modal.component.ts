import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SlidersService } from '@app/components/sliders/sliders.service';
import { Video } from '@app/core/models/video';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})

export class HeaderModalComponent implements OnInit {

  // allow to access controls shortly in html
  get fm() { console.log('videoform', this.videoForm.controls); return this.videoForm.controls; }

  categories;
  matcher = new MyErrorStateMatcher();
  videoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<HeaderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video,
    private formBuilder: FormBuilder,
    private sliderSvc: SlidersService
  ) { }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(this.getUrlRegexPattern())]],
      title: ['', [Validators.required, Validators.maxLength(60)]],
      category: ['', Validators.required],
      description: [''],
    });
    this.getCategories();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCategories() {
    this.sliderSvc.getPlaylists().subscribe(categories => { this.categories = categories; });
  }

  getUrlRegexPattern() {
    return '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
