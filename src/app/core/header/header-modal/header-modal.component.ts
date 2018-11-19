import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})

export class HeaderModalComponent implements OnInit {

  reg = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';

  videoForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<HeaderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(this.reg)]],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  get f() { return this.videoForm.controls; }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
