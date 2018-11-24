import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '@app/core/models/category';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})

export class CategoryModalComponent implements OnInit {

  categoryForm: FormGroup;

  get fm() { return this.categoryForm.controls; }

  constructor(
    public dialogRef: MatDialogRef<CategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      spanish_name: ['', Validators.required],
      english_name: ['', Validators.required],
      french_name: ['', Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
