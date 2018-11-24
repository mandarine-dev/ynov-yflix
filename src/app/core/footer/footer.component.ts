import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  langs = [{
    key: 'fr',
    caption: 'Français',
  },
  {
    key: 'us',
    caption: 'English',
  },
  {
    key: 'es',
    caption: 'Español',
  }];

  selectedLang = this.langs[0];

  constructor(private translateSvc: TranslateService) { }

  ngOnInit() {
  }

  onApplyLang(lang) {
    this.selectedLang = lang;
    this.translateSvc.currentLang = lang.key;
  }

}
