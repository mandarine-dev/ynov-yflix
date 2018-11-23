import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SlidersService } from '@app/components/sliders/sliders.service';
import { Category } from '@app/core/models/category';
import { Video } from '@app/core/models/video';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})

export class HeaderModalComponent implements OnInit {

  // allow to access controls shortly in html
  get fm() { return this.videoForm.controls; }

  categories;
  matcher = new MyErrorStateMatcher();
  videoForm: FormGroup;

  category = new Category();

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HeaderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video,
    private formBuilder: FormBuilder,
    private sliderSvc: SlidersService,
    private translateSvc: TranslateService
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

  onCancel(): void {
    this.dialogRef.close();
  }

  getCategories() {
    this.sliderSvc.getPlaylists().subscribe(categories => { this.categories = categories; });
  }

  getUrlRegexPattern() {
    return '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
  }

  openCategoryModal() {
    const dialogRef = this.dialog.open(CategoryModalComponent, {
      width: '400px',
      height: '440px',
      data: this.category,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(playlist => {
      if (playlist) {
        this.sliderSvc.addPlaylist(playlist);
      }
    });
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
