import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnChanges {

  @Input() value = 0;

  visible = false;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.value > 0 && this.value < 100) {
      this.visible = true;
    } else {
      setTimeout(() => {
        this.visible = false;
      }, 2000);
    }
  }

}
