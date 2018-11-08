import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  @ViewChild('tilesContainer', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  constructor() { }

  tiles = [{
    id: 1,
    img: 'https://i1.wp.com/nchscourant.com/wp-content/uploads/2018/01/riverdale.png?fit=1200%2C630',
    title: 'Test 1'
  },
  {
    id: 2,
    img: 'https://www.netflix-news.com/wp-content/uploads/2017/08/dexter-serie-netflix-disparition-750x400.jpg',
    title: 'Test 2'
  },
  {
    id: 3,
    // tslint:disable-next-line:max-line-length
    img: 'https://mcetv.fr/wp-content/uploads/2018/11/Game-of-Thrones-saison-8-Une-bataille-a-e%CC%81te%CC%81-particulie%CC%80rement-longue-a%CC%80-tourner-bbig.jpg',
    title: 'Test 3'
  },
  {
    id: 4,
    // tslint:disable-next-line:max-line-length
    img: 'https://netflixupdate.com/wp-content/uploads/2015/08/True-Detective-Season-2-Netflix.jpg',
    title: 'Test 4'
  },
  {
    id: 5,
    img: 'http://www.brooklynvegan.com/files/2018/01/dark.jpg',
    title: 'Test 5'
  },
  {
    id: 6,
    img: 'https://www.kissradio.ca/wp-content/uploads/sites/6/2018/11/Breaking-Bad-Walt-and-Jesse-Title-600x375.jpg',
    title: 'Test 6'
  },
  {
    id: 7,
    // tslint:disable-next-line:max-line-length
    img: 'https://www.monstersandcritics.com/wp-content/uploads/2018/10/The-Seven-Deadly-Sins-Season-2-release-date-on-Netflix-U.S.-is-finally-here-Nanatsu-no-Taizai-English-dub-for-Revival-Of-The-Commandments-confirmed.jpg',
    title: 'Test 7'
  }];

  ngOnInit() {
  }

  public scrollRight(): void {
    console.log('scroll right ', this.widgetsContent.nativeElement.scrollLeft);
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 810), behavior: 'smooth' });
    console.log('this.widgetsContent.nativeElement.scrollLeft', this.widgetsContent.nativeElement.scrollLeft);
  }

  public scrollLeft(): void {
    console.log('scrollLeft before', this.widgetsContent.nativeElement);
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 810), behavior: 'smooth' });
    console.log('scrollLeft after', this.widgetsContent.nativeElement.scrollLeft);

  }

}
